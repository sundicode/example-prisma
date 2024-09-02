import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, password, email } = await req.json();
    if (!username || !email || !password)
      return NextResponse.json(
        { message: "All Feild Required" },
        { status: 400 }
      );
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });
    if (existingUser)
      return NextResponse.json(
        { message: "User Already exist" },
        { status: 400 }
      );
    const user = await prisma.users.create({
      data: {
        username,
        email,
        password,
      },
    });
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
