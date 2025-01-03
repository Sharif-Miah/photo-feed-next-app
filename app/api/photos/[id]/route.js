import { getPhotosById } from '@/lib/Image-data';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const photosId = params?.id;

  const data = await getPhotosById(photosId);
  return NextResponse.json(data);
}
