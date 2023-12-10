import { NextResponse } from 'next/server'
import { prisma } from '@/utils/prisma'

export async function POST(req) {
  const { name, email, password } = await req.json()

  // create user to database
  try {
    const createUser = await prisma.users.create({
      data: {
        name,
        email,
        password
      }
    });
    return NextResponse.json({ message: "Creating User Successfully", data: createUser }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Error Creating User" }, { status: 500 })
  }


}