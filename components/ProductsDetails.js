import React, { useState } from "react";
import Image from "next/image";

function ProductsDetails({ product }) {
  console.log("products Detail", product);
  const { originalSrc } = product.product.images.edges[0].node;

  const [card, setCard] = useState([]);
  console.log("card :", card);

  const available = product.product.variants.edges[0].node.availableForSale;
  return (
    <>
      <section className="w-full mt-10 overflow-x-hidden gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12">
        <div className="grid items-start gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 md:w-full lg:col-span-2">
            <div className="md:col-span-2 snap-center card-image aspect-square md:w-full w-[80vw] shadow rounded">
              <Image src={originalSrc} width={600} height={600} alt="selam" />
            </div>
          </div>
          <div className="sticky md:mx-auto max-w-xl md:max-w-[24rem] grid gap-8 p-0 md:p-6 md:px-0 top-[6rem] lg:top-[8rem] xl:top-[10rem]">
            <div className="grid gap-2">
              <h1 className="text-4xl font-bold leading-10 whitespace-normal">
                {product.product.title}
              </h1>
              <div className="max-w-prose whitespace-pre-wrap inherit text-copy opacity-50 font-medium">
                {product.product.description}
              </div>
              <div className="max-w-prose whitespace-pre-wrap inherit text-copy opacity-50 font-medium">
                {product.product.variants.edges[0].node.priceV2.amount} ₺
              </div>
            </div>

            <div className="mt-2">
              {/* <div className="prose border-t border-gray-200 pt-6 text-black text-md">
                <button>
                  <span className="bg-black text-white inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none w-full border">
                    Add To Card
                  </span>
                </button>
              </div> */}
              {available ? (
                <button onClick={() => setCard([product])}>
                  <span className="bg-black text-white inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none w-full border">
                    Add To Card
                  </span>
                </button>
              ) : (
                <button className="rounded-lg text-black px-2 py-3 mt-3 cursor-not-allowed ">
                  Sold out!
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsDetails;
