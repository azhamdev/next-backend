import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export async function POST(req) {
  const { token } = await req.json();

  try {
    jwt.verify(token, process.env.SECRET_KEY);

    return NextResponse.json({ isvalid: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ isvalid: false }, { status: 401 })
  }
}