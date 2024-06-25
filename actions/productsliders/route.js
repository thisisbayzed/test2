import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const products = await prisma.productSliders.findMany();
    return NextResponse.json({ status: "success", data: products });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err });
  }
}
