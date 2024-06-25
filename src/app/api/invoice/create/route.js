import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const headerlist = headers();
    const id = parseInt(headerlist.get("id"));
    const email = headerlist.get("email");
    const prisma = new PrismaClient();

    // calculate cart total , discount , tax and more others step-01
    const cartitmes = await prisma.productCarts.findMany({
      where: {
        userId: id,
      },
      include: {
        product: true,
      },
    });
    let totalamount = 0;
    cartitmes.forEach((item) => {
      let price;
      if (item.product.discount) {
        price = item.product.discountPrice;
      } else {
        price = item.product.price;
      }
      totalamount += item.quantity * price;
    });
    const vat = totalamount * 0.5;
    const payable = totalamount + vat;

    // customer details and shipping details.... step-02
    const profile = await prisma.customersProfile.findUnique({
      where: {
        userId: id,
      },
    });
    const customerdetails = `Name:${profile.customername} Email:${email} Address:${profile.customeraddress} Phone:${profile.customerphone}`;
    const shippingdetails = `Name:${profile.shippingname} Email:${email} Address:${profile.shippingaddress} City:${profile.shippingcity} Phone:${profile.shippingphone}`;

    // transaction details and other details.... step-03
    const tran_id = Math.floor(100000 + Math.random() * 900000).toString();
    const validationid = "0";
    const deliverystatus = "Pending";
    const paymentstatus = "Pending";

    // create invoice.... step-04
    const result = await prisma.invoices.create({
      data: {
        total: totalamount,
        vat: vat,
        payable: payable,
        customerdetails: customerdetails,
        shippingaddress: shippingdetails,
        transactionid: tran_id,
        validity: validationid,
        deliverystatus: deliverystatus,
        paymentstatus: paymentstatus,
        userId: id,
      },
    });

    // create invoice items .... step-05
    const invoiceid = result.id;
    for (const item of cartitmes) {
      await prisma.invoicesProducts.create({
        data: {
          invoiceId: invoiceid,
          productId: item.productId,
          userId: id,
          quantity: item.quantity,
          saleprice: item.product.discount
            ? item.product.discountPrice
            : item.product.price,
          color: item.color,
          size: item.size,
        },
      });
    }

    // delete cart items .... step-06
    await prisma.productCarts.deleteMany({
      where: {
        userId: id,
      },
    });

    // start with payments setting with ssl commerce .... step-07
    const paymentssettings = await prisma.sslcommerce.findFirst();
    const form = new FormData();

    // initial informations
    form.append("store_id", paymentssettings.storeid);
    form.append("store_passwd", paymentssettings.storepass);
    form.append("total_amount", payable.toString());
    form.append("currency", paymentssettings.currency);
    form.append("tran_id", tran_id);

    // url informations to where
    form.append(
      "success_url",
      `${paymentssettings.successurl}?tran_id=${tran_id}`
    );
    form.append("fail_url", `${paymentssettings.failurl}?tran_id=${tran_id}`);
    form.append(
      "cancel_url",
      `${paymentssettings.cancelurl}?tran_id=${tran_id}`
    );
    form.append("ipn_url", `${paymentssettings.ipnurl}?tran_id=${tran_id}`);

    // customer details
    form.append("cus_name", profile.customername);
    form.append("cus_email", email);
    form.append("cus_add1", profile.customeraddress);
    form.append("cus_city", profile.customercity);
    form.append("cus_state", profile.customerstate);
    form.append("cus_country", profile.customercountry);
    form.append("cus_phone", profile.customerphone);
    form.append("cus_fax", profile.customerfax);

    form.append("shippingmethod", "YES");
    form.append("ship_name", profile.shippingname);
    form.append("ship_add1", profile.shippingaddress);
    form.append("ship_city", profile.shippingcity);
    form.append("ship_state", profile.shippingstate);
    form.append("ship_postcode", profile.shippingpostcode);
    form.append("ship_country", profile.shippingcountry);

    // products
    form.append("product_name", "According to invoice");
    form.append("product_category", "According to invoice");
    form.append("product_profile", "According to invoice");
    form.append("product_amount", "According to invoice");

    let SSLRes = await fetch(paymentssettings.initurl, {
      method: "POST",
      body: form,
    });

    let SSLResJSON = await SSLRes.json();

    return NextResponse.json({
      status: "success",
      data: SSLResJSON,
    });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err });
  }
}
