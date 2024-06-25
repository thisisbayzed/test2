import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const headerlist = headers();
    const id = parseInt(headerlist.get("id"));
    const prisma = new PrismaClient();
    const resbody = await req.json();
    const result = await prisma.customersProfile.upsert({
      where: {
        userId: id,
      },
      update: resbody,
      create: {
        ...resbody,
        userId: id,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err });
  }
}
