import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductsList({ products }) {
  console.log("productsList", products);
  console.log("productsList handle", products.handle);

  return (
    <>
      <section className="w-full gap-4 md:gap-8 grid p-6 md:p-8 lg:p-12">
        <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">
          Products
        </h2>
        <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 false  sm:grid-cols-3 false false">
          {products.map((product) => {
            return (
              <div key={product.node.id}>
                <Link href={`/product/${product.node.handle}`}>
                  <a className="group">
                    <div className="grid gap-4">
                      <Image
                        className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
                        src={product.node.images.edges[0].node.src}
                        width={400}
                        height={400}
                        alt={product.node.images.edges[0].node.altText}
                      />
                      <h2 className="whitespace-pre-wrap max-w-prose font-medium text-copy">
                        {product.node.title}
                      </h2>
                      <h6 className="text-md font-medium text-gray-600">
                        {product.node.priceRange.minVariantPrice.amount} ₺
                      </h6>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ProductsList;
