import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function card() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col space-y-7 justify-center items-center md:py-8 md:px-12 px-4 py-6 h-screen">
          <h2 className="whitespace-pre-wrap max-w-prose font-bold text-sm text-black">
            Shopping cart is empty
          </h2>

          <button
            onClick={() => router.push("/product")}
            className="inline-block rounded-sm 
        font-medium text-center py-3 px-4  leading-none bg-black text-white w-full"
          >
            Continue shopping
          </button>
        </div>
      </main>
    </div>
  );
}
