import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("https://graphql.datocms.com/", {
        headers: {
            "content-type": "application/json",
            authorization: "Bearer " + process.env.DATOCMS_API_KEY,
        },
    });
    const data = await res.json();
    console.log(data);

    return NextResponse.json({ data });
}
