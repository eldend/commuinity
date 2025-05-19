import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/server/prisma';

export async function GET(    
    req: NextRequest,
    ctx: { params: { id: string } }
) {
    const { id } = await ctx.params;
    if(!id) {
        return NextResponse.json({
            ok: false,
        })
    }
    const post = await prisma.post.findUnique({
        where: { id: Number(id) },
    });
    if(!post) {
        return NextResponse.json({
            ok: false,
        })
    }

    return NextResponse.json({
        ok: true,
        post,
    });
}
