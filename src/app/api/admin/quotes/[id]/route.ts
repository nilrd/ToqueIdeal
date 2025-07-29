import { NextRequest, NextResponse } from 'next/server'

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log('PUT request received for ID:', params.id)
  return NextResponse.json({ message: `PUT request for ID ${params.id} received` })
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log('DELETE request received for ID:', params.id)
  return NextResponse.json({ message: `DELETE request for ID ${params.id} received` })
}


