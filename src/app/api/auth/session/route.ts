import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await auth();
    if(!session?.user){
        return NextResponse.json(
            {error:"Unauthroized"},
            {status: 401}
        )
    }
    return NextResponse.json(session,
        {status: 200}
    );
}