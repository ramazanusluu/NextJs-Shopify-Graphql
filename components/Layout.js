import React from "react";
import Link from "next/link";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
      <div className="">
        <a href="#mainContent" className="sr-only">
          Skip to content
        </a>
      </div>
      <header
        role="banner"
        className={
          "flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm  bg-white/80 text-black"
        }
      >
        <div className="flex gap-12">
          <Link href="/">
            <a className="font-bold">SHOPIFY</a>
          </Link>
          <Link href="/collection">
            <a className="font-normal">Collections</a>
          </Link>
          <Link href="/product">
            <a className="font-normal">Products</a>
          </Link>
        </div>
        <div className="flex gap-12">
        <Link href="/card">
            <a className="font-bold">Card</a>
          </Link>
        </div>
      </header>

      <main role="main" className="container mb-auto">
        {children}
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl  mx-auto p-8 overflow-hidden sm:px-6 lg:px-8 ">
          <p className="text-center text-black">Copyright &copy; Ramazan</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
