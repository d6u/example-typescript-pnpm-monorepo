import z from "zod";

export function run() {
  const mySchema = z.string();

  // parsing
  // mySchema.parse("tuna"); // => "tuna"
  // mySchema.parse(12); // => throws ZodError

  // "safe" parsing (doesn't throw error if validation fails)
  mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
  console.log(mySchema.safeParse(12)); // => { success: false; error: ZodError }
}
