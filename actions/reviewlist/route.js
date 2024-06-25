import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const prisma = new PrismaClient();
    const reviews = await prisma.productReviews.findMany({
      where: {
        productId: id,
      },
      include: {
        customer: { select: { customername: true } },
      },
    });
    return NextResponse.json({ status: "success", data: reviews });
  } catch (err) {
    return NextResponse.json({ status: "faileddd", data: err });
  }
}
