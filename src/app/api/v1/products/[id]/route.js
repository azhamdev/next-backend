import { prisma } from '@/utils/prisma';
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const singleProduct = await prisma.products.findFirst({
      where: {
        id: Number(id)
      }
    });

    return NextResponse.json({ message: "Product Fetched successfully", data: singleProduct }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Error Fetching Products" }, { status: 500 })
  }
}


export async function PATCH(req, { params }) {
  // inisialisasikan apa yang akan diupdate
  const { name, desc, price } = await req.json();
  const { id } = params;

  try {
    const singleProduct = await prisma.products.update({
      where: {
        id: Number(id)
      }, data: {
        name,
        desc,
        price
      }
    });

    return NextResponse.json({ message: "Product Updated successfully", data: singleProduct }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Error Fetching Products" }, { status: 500 })
  }
}


export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const deleteProduct = await prisma.products.delete({
      where: {
        id: Number(id)
      },
    });

    return NextResponse.json({ message: "Product Deleted successfully", data: deleteProduct }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Error Fetching Products" }, { status: 500 })
  }
}

