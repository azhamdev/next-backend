import { NextResponse } from "next/server";
import * as jose from 'jose'


export default async function middleware(req) {
  const token = req.cookies.get("token")?.value;

  try {
    const secretKey = process.env.SECRET_KEY
    const encodedSecretKey = new TextEncoder().encode(secretKey)

    await jose.jwtVerify(token, encodedSecretKey)
    return NextResponse.next();

  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

}

export const config = {
  matcher: ['/api/v1/products', '/'],
}