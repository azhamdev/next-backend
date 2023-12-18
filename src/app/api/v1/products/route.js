import { prisma } from '@/utils/prisma';
import { NextResponse } from 'next/server'
// import jwt from 'jsonwebtoken';

export async function GET(req) {

  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get('q');
  const minPrice = searchParams.get('minp');
  const maxPrice = searchParams.get('maxp');

  let allProducts;

  try {

    // jwt.verify(token, process.env.SECRET_KEY);

    if (query || minPrice || maxPrice) {
      allProducts = await prisma.products.findMany({
        where: {
          name: {
            contains: query || "",
            mode: "insensitive"
          }, price: {
            gte: Number(minPrice) || 0,
            lte: Number(maxPrice) || 9999999
          }
        }
      })
    } else {
      allProducts = await prisma.products.findMany();
    }

    return NextResponse.json({ message: "Product Fetched successfully", data: allProducts }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Error Fetching Products" }, { status: 500 })
  }
}

export async function POST(req) {
  const { name, desc, price, user_id } = await req.json();

  //creating product in database
  try {
    const createProduct = await prisma.products.create({
      data: {
        name,
        desc,
        price,
        user_id: Number(user_id)
      }
    });
    return NextResponse.json({ message: "Creating Product Success", data: createProduct }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Error Creating Product" }, { status: 500 })
  }

}