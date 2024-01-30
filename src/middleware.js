export { default } from "next-auth/middleware";

export const config = { matcher: ["/pcBuilder"] };

// this code for only private or protected route
// A matcher array bear of all required protected route.
