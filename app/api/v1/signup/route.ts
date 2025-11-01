import { NextResponse, NextRequest } from "next/server";
export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log(data)
    return NextResponse.json({
        msg: "you have signed up"
    })

}