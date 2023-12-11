import { NextResponse } from 'next/server'
import { prisma } from '@/utils/prisma'
import bcrypt from 'bcrypt'

export async function POST(req) {
  const { name, email, password } = await req.json()

  // create user to database
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const createUser = await prisma.users.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });
    return NextResponse.json({ message: "Creating User Successfully", data: createUser }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Error Creating User" }, { status: 500 })
  }


}