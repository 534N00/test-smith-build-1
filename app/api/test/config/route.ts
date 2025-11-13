import { NextRequest, NextResponse } from "next/server";
import { sleep } from "@util/sleep";



/**
 * This endpoint takes in a config and does nothing.
 * Used in the /generate page when the user presses Generate Test
 * 
 * In a real app, we would validate the request "req" object to ensure it is an ok configuration.
 * If not valid, we would send a non 200 HTTP error.
 * We would then store it in a database to use for generation later.
 */

export async function POST(req: NextRequest) {
    const { config } = await req.json();

    console.log("Test Config:");
    console.log(config);

    await sleep(1000); // Simulate some operations happening.

    return NextResponse.json({ msg: "Success." }, { status: 200 });
}