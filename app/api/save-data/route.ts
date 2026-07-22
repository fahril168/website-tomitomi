import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "context", "data.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Failed to read data locally:", error);
    return NextResponse.json({ error: error.message || "Failed to read file" }, { status: 500 });
  }
}


export async function POST(request: Request) {
  // Only allow saving on localhost / development environment for security!
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "Writing files is only allowed in local development mode." },
      { status: 403 }
    );
  }

  try {
    const data = await request.json();

    // Define the absolute path to context/data.json
    const filePath = path.join(process.cwd(), "context", "data.json");

    // Write the JSON content back to the file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    return NextResponse.json({ success: true, message: "Data saved successfully to local file." });
  } catch (error: any) {
    console.error("Failed to save data locally:", error);
    return NextResponse.json({ error: error.message || "Failed to write file" }, { status: 500 });
  }
}
