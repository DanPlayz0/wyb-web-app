import { getAuthTokenOrNull } from '@/helpers/oauth/helpers';
import { NextResponse } from 'next/server'

export async function middleware() {
  const token = await getAuthTokenOrNull()
  if(token === null) {
   return NextResponse.json({success: false, error: "Unauthorized"}, { status: 401 })
  }
  return NextResponse.next();
}