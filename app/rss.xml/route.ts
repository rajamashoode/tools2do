export async function GET(): Promise<Response> {
  return Response.redirect('https://tools2do.com/feed.xml', 301);
}
