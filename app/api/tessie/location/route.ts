import { NextResponse } from 'next/server'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: `Bearer ${process.env.TESSIE_ACCESS_TOKEN}`,
  },
}

export async function GET() {
  try {
    const result = await fetch(
      `https://api.tessie.com/${process.env.TESLA_VIN}/location`,
      options,
    )
    const json = await result.json()
    return NextResponse.json(json)
  } catch (error: any) {
    return new Response(`error: ${error.message}`, {
      status: 400,
    })
  }
}
