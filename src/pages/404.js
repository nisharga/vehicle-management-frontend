 
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>PH-News-404 Not Found</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-gray-400 overflow-hidden">
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-7xl font-bold text-brand">404</h1>
            <h1 className="text-4xl font-medium py-8">oops! Page not found</h1>
            <p className="text-xl pb-8 px-12 font-medium">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>

            <Link href="/">
              <button className="btn my-5">Back To Home</button> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
