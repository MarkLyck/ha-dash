import { NextResponse } from 'next/server'

// example data
// {"data":{"Locked":"true","Location":{"latitude":39.124548,"longitude":-77.165705}},"createdAt":"2024-05-29T02:10:50.714429888Z","vin":"7SAYGDEEXPF836682"}

// webhook POST for Teslemetry
// export async function POST(request: Request) {
//   try {
//     const json = await request.json()
//     await kv.set('tesla_state', {
//       locked: json.data.Locked,
//       location: json.data.Location,
//       createdAt: json.createdAt,
//       vin: json.vin,
//     })
//   } catch (error: any) {
//     return new Response(`Webhook error: ${error.message}`, {
//       status: 400,
//     })
//   }

//   return new Response('Success!', { status: 200 })
// }

const vin = '7SAYGDEEXPF836682'
const TESLEMETRY_TOKEN = 'au412j8a9c-zhemftpmwj-c6wzcv89fz-z5zneaqlw9'

export async function GET() {
  try {
    const result = await fetch(
      `https://api.teslemetry.com/api/1/vehicles/${vin}?token=${TESLEMETRY_TOKEN}`,
    )
    console.log('🔈 ~ result:', await result.json())
    return NextResponse.json(result)
  } catch (error: any) {
    return new Response(`error: ${error.message}`, {
      status: 400,
    })
  }
}
