import { auth } from "@/auth";

export default auth((req) => {
  if (req.nextUrl.pathname.startsWith("/product/") && !req.auth) {
    const newUrl = new URL("/api/auth/signin", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});
