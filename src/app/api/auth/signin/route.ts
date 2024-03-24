import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const db = process.env.DATABASE_URL || "";
const sql = neon(db);

export async function POST(request: any) {
  const data = await request.json();

  try {
    const { email, pass } = data;
    console.log(data);
    if (!email || !pass) {
      throw new Error(`Failed to handle post request`);
    }

    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    if (user.length == 0)
      throw new Error("No user with that email, try signing up");
    else if (user[0]?.pass === pass) {
      console.log("User successfully logged in");
    } else if (user[0]?.pass !== pass) {
      throw new Error("Password incorrect");
    }
  } catch (e) {
    console.error(`${e}`);
  }
  return NextResponse.json(data);
}
