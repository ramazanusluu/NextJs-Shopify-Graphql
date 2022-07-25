const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONNT_ACCESSTOKEN;

//sorguları kabul eden ShopifyData adlı fonksiyon ve bu  Shopify Storefront GraphQL API'sine bir POST isteği yapar ve json yanıtını döndürür.
async function ShopifyData(query) {
  const URL = `https://${domain}/api/2022-07/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error(" Not fetched");
  }
}

//for the products
export async function getAllProducts() {
  const query = `
  {
  products(first: 25) {
    edges {
      node {
        id
        title
        description
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 5) {
          edges {
            node {
              src
              altText
            }
          }
        }
      }
    }
  }
}
`;

  const response = await ShopifyData(query);

  const allProducts = response.data.products.edges
    ? response.data.products.edges
    : [];

  return allProducts;
}

//for the collections
export async function getAllCollections() {
  const query = `
    {
        collections(first: 25) {
          edges {
            node {
              handle
              id
              title
              image {
                src
                altText
                 
          }
            }
          } 
        }
   }
  `;

  const response = await ShopifyData(query);

  const allCollections = response.data.collections.edges
    ? response.data.collections.edges
    : [];

  return allCollections;
}
