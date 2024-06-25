import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const headerlist = headers();
    const id = parseInt(headerlist.get("id"));
    const reqBody = await req.json();
    reqBody.userId = id;
    const prisma = new PrismaClient();
    const result = await prisma.productCarts.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
