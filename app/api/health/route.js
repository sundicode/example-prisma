import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Health Check" }, { status: 200 });
}
