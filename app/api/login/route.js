import { NextResponse } from "next/server";
import { testDbConnection } from '../../lib/db.js'
import { verifyLogin } from "../../lib/auth.js";

export async function POST(req) {
  const { username, password } = await req.json();

  if (!(await testDbConnection())) {
    return NextResponse.json({ error: "Database unavailable" }, { status: 503 });
  }

  const user = await verifyLogin(username, password);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return NextResponse.json({ success: true, token });
}
