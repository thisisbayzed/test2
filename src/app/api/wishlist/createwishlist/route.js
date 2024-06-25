import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const prisma = new PrismaClient();

  try {
    let headerList = headers();
    let id = parseInt(headerList.get("id"));
    let reqBody = await req.json();

    const result = await prisma.productWishlist.create({
      data: { productId: reqBody["productId"], userId: id },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  } finally {
    await prisma.$disconnect(); // Close the Prisma client connection
  }
}
