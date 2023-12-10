import { NextResponse } from 'next/server'
import { prisma } from '@/utils/prisma'

export async function POST(req) {
  const { email, password } = await req.json()

  // find user from database
  try {
    const findUser = await prisma.users.findUnique({
      where: {
        email
      }
    });

    if (!findUser) {
      return NextResponse.json({ message: "invalid email" }, { status: 204 })
    }

    if (findUser.password === password) {
      return NextResponse.json({ message: "logged in successfully" }, { status: 200 })
    }

    return NextResponse.json({ message: "invalid password" }, { status: 204 });

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Error logging in" }, { status: 500 })
  }


}