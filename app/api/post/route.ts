import { NextResponse } from "next/server";
import { prisma } from '@/lib/server/prisma';

export async function GET() {

    const postList = await prisma.post.findMany({
        select:{
            id: true,
            title: true,
            createdAt: true,
        }
    })
    return NextResponse.json({
        ok: true,
        postList
    });
}