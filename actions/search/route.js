import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const keyword = searchParams.get("keyword");
    const prisma = new PrismaClient();
    const result = await prisma.products.findMany({
      where: {
        shortDescription: {
          contains: keyword,
        },
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err });
  }
}
