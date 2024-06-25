import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    let headerList = headers();
    let id = parseInt(headerList.get("id"));
    const prisma = new PrismaClient();
    const result = await prisma.productCarts.findMany({
      where: {
        userId: id,
      },
      include: {
        product: true,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err });
  }
}
