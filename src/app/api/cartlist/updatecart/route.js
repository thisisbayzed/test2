import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(req, res) {
  try {
    const headerlist = headers();
    const id = parseInt(headerlist.get("id"));
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.productCarts.updateMany({
      where: {
        AND: [
          {
            userId: id,
          },
          {
            id: reqBody.id,
          },
        ],
      },
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
