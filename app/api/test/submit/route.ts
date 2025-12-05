import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    console.log("Generating test from config...");


    console.log("Test generated!");

    return NextResponse.json({ msg: "Success." }, { status: 200 });
}