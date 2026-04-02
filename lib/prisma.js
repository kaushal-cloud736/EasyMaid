import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

// PrismaClient ko multiple times create hone se bachane ke liye
// Next.js dev mode mein files baar-baar reload hoti hain,
// agar har reload pe new PrismaClient banega to
// database mein "too many connections" error aa sakta hai.
//
// Isliye hum globalThis.prisma use karte hain:
// - agar already instance exist hai → reuse karo
// - agar nahi hai → new PrismaClient banao
//
// Note:
// Server restart (Ctrl + C) par new connection banana normal hai,
// kyunki purana process close ho chuka hota hai.