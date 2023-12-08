import { NextResponse } from 'next/server'

export async function POST(req) {
  const { name, email, password } = await req.json()

  return NextResponse.json({ name, email, password }, { status: 201 })
}