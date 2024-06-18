import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request: Request) {
  await prisma.todo.deleteMany({}); // delete * from todos

  await prisma.todo.createMany({
    data: [
      { description: "Piedra del alma", complete: true },
      { description: "Piedra del poder" },
      { description: "Piedra de tiempo" },
      { description: "Piedra de la espacio" },
      { description: "Piedra del realidad" },
    ],
  });

  return NextResponse.json({
    message: "Seed executed",
  });
}
