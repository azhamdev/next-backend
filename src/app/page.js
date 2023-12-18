async function getProducts() {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJkb3VibGVjaG9jQGdtYWlsLmNvbSIsIm5hbWUiOiJkb3VibGVjaG9jIiwiaWF0IjoxNzAyODk1MjE1fQ.tuhgAMm4E_BVbVnXCx-WVKKwxHQ1QgT6zjDsQvwbNN8"
  try {
    const res = await fetch("http://localhost:3000/api/v1/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    const data = await res.json()
    return data;
  } catch (error) {
    return []
  }
}

export default async function Page() {
  // const data = await getProducts()
  // console.log(data)
  return (
    <main>
      Test
    </main>
  )
}
