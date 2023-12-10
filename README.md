This is a Backend Project Basic with Next.js

## Routes

Product Routes:

```http


Get All Product
GET http://localhost:3000/api/v1/products

Get Product with query filtering
GET  http://localhost:3000/api/v1/products?minp=20&maxp=80&q=keyboard

Get by Id
GET  http://localhost:3000/api/v1/products/2

Patch by Id
PATCH http://localhost:3000/api/v1/products/2

Delete Product
DELETE  http://localhost:3000/api/v1/products/3


```

Auth Routes:

```http

Registering User
POST http://localhost:3000/api/v1/auth/register

Login User
POST http://localhost:3000/api/v1/auth/login

{
  "email":"rasyid@gmail.com",
  "password":"123456"
}

```
