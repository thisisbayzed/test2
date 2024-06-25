import { NextResponse } from "next/server";
import { VerifyToken } from "./helpers/Jwttokenhelpers";
export async function middleware(request, response) {
  const token = request.cookies.get("token");
  const isLoggedIn = token ? true : false;

  let usersIdentity;
  if (isLoggedIn) {
    usersIdentity = await VerifyToken(token.value); // Assuming verifyToken returns the user's identity
    console.log(usersIdentity);
    if (!usersIdentity) {
      // Handle invalid or expired token
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Setting user identity in headers for future use
  const addHeaders = new Headers(request.headers);
  if (usersIdentity) {
    addHeaders.set("id", usersIdentity.id);
    addHeaders.set("email", usersIdentity.email);
  }

  if (request.nextUrl.pathname === "/" && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/login") && isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    !isLoggedIn &&
    !request.nextUrl.pathname.startsWith("/login") &&
    !request.nextUrl.pathname.startsWith("/register")
  ) {
    return NextResponse.json(
      { error: "Not authorized ok first logged in" },
      { status: 401 }
    );
  }

  return NextResponse.next({
    request: {
      headers: addHeaders, // Corrected typo here
    },
  });
}
