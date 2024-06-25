import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function Middlemanverification(request, response) {
  try {
    const { email, otp } = await request.json();
    const prisma = new PrismaClient();

    const isexists = await prisma.users.findFirst({
      where: {
        email: email,
        otp: otp,
        otpVerified: false,
      },
    });

    if (!isexists) {
      return NextResponse.json(
        { message: "Invalid OTP credentials" },
        { status: 401 }
      );
    } else {
      await prisma.users.update({
        where: {
          id: isexists.id,
          email: email,
        },
        data: {
          otpVerified: true,
          otp: "", // Clear OTP after verification if needed
        },
      });
      return NextResponse.json(
        { message: "OTP verified successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
