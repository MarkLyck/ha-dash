import { kv } from '@vercel/kv'
import { NextResponse } from 'next/server'

// example data
// {"data":{"Locked":"true","Location":{"latitude":39.124548,"longitude":-77.165705}},"createdAt":"2024-05-29T02:10:50.714429888Z","vin":"7SAYGDEEXPF836682"}

export async function POST(request: Request) {
  try {
    const json = await request.json()
    await kv.set('tesla_state', json)
  } catch (error: any) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    })
  }

  return new Response('Success!', { status: 200 })
}

export async function GET() {
  const user = await kv.hgetall('tesla_state')
  return NextResponse.json(user)
}
