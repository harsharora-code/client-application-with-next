import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export async function POST(req: NextRequest) {
    try {

    const data = await req.json();
    await prismaClient.user.create({
        data : {
            username : data.username,
            password : data.password
        }
    })
    console.log(data)
    return NextResponse.json({
        msg: "you have signed up"
    })
}catch(e) {
    console.error(e);
        return NextResponse.json(
          { error: "Failed to create user" },
          { status: 500 }
        );
      } finally {
        await prismaClient.$disconnect();
      }



}