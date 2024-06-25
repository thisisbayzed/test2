import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const keyword = searchParams.get("remarks");
    const prisma = new PrismaClient();
    const result = await prisma.products.findMany({
      where: {
        remark: keyword,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err });
  }
}
