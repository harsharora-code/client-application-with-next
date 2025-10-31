import { NextResponse } from "next/server";
export function POST() {
    return NextResponse.json({
        name: "harsh",
        email: "hare@gmailcom"
    })
}
export function GET() {
    return NextResponse.json({
        name: "harshiop",
        email : "harsh56@gmailcom"
    })
}