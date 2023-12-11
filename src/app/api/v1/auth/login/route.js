import { NextResponse } from 'next/server'
import { prisma } from '@/utils/prisma'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

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

    // const payload = {
    //   id: findUser.id,
    //   email: findUser.email,
    //   name: findUser.name
    // }

    // const token = jwt.sign(payload, process.env.SECRET_KEY)

    const isPasswordMatch = await bcrypt.compare(password, findUser.password)

    if (!isPasswordMatch) {
      return NextResponse.json({ message: "Invalid Password" }, { status: 203 })
    }

    // if (findUser.password === password) {
    //   const res = NextResponse.json({ message: "logged in successfully" }, { status: 200 })
    //   res.cookies.set("token", token)

    //   return res;
    // }

    return NextResponse.json({ message: "Login Succesfully" }, { status: 200 })



  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Error logging in" }, { status: 500 })
  }
}