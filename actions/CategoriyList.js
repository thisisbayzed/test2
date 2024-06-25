import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function Fetchingcategories(req, res) {
  try {
    const prisma = new PrismaClient();
    const brands = await prisma.categories.findMany();
    return NextResponse.json({ status: "success", data: brands });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err });
  }
}
