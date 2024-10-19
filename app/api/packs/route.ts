export async function GET() {
  return Response.json({message: "Get Request"})
}

export async function POST(request: Request) {

  const data = await request.json()

  const z = (await import('zod')).default

const packSchema = z.object({
  type: z.enum(
    [
      'wouldyourather',
      'neverhaveiever',
      'wwyd',
      'truth',
      'dare',
      'topic',
      'mixed'
    ],
    {
      required_error: 'Please select a pack type',
      message: 'Please select a pack type'
    }
  ),
  name: z.string().min(4, 'Make sure your packs name is atleast 4 characters long').max(100, "Make sure your packs name is only 100 characters long"),
  description: z.string().min(10, "Make sure your packs description is atleast 10 characters long").max(500, "Make sure your packs description is only 500 characters long"),
  tags: z.array(z.string()).min(1, 'At least one tag is required').max(10),
  questions: z
    .array(z.string())
    .min(1, 'Add at least one question to your pack')
})

  const parsedPackResult = packSchema.safeParse(data)

  if(!parsedPackResult.success) {
    return Response.json({success: false, error: parsedPackResult.error.issues}, { status: 400 })
  }
  return Response.json({message: "Post Request", data},)
}
