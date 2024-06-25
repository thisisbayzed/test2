import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function Creatings(request, response) {
  try {
    const body = await request.json();
    const headerlist = headers();
    console.log(headerlist);
    const id = parseInt(headerlist.get("id"));
    console.log(id);
    const prisma = new PrismaClient();
    const note = await prisma.notes.create({
      data: {
        title: body.title,
        description: body.description,
        picture: body.picture,
        UserId: id,
      },
    });
    console.log(note);
    return NextResponse.json(
      { message: "product created successfully", data: note },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
