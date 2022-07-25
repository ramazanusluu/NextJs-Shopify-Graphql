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

export async function getProduct(handle) {
  const query = `
    {
      productByHandle(handle: "${handle}") {
        collections(first: 1) {
          edges {
            node {
              products(first: 5) {
                edges {
                  node {
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                    handle
                    title
                    id
                    totalInventory
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
          }
        }
        id
        title
        handle
        description
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        options {
          name
          values
          id
        }
        variants(first: 25) {
          edges {
            node {
              selectedOptions {
                name
                value
              }
              image {
                originalSrc
                altText
              }
              title
              id
              availableForSale
              priceV2 {
                amount
              }
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const product = response.data.productByHandle
    ? response.data.productByHandle
    : [];

  return product;
}

export async function recursiveCatalog(cursor = "", initialRequest = true) {
  let data;

  if (cursor !== "") {
    const query = `{
      products(after: "${cursor}", first: 5) {
        edges {
          cursor
          node {
            id
            handle
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }`;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;
      console.log("Cursor: ", cursor);

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  } else {
    const query = `{
      products(first: 250) {
        edges {
          cursor
          node {
            id
            handle
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
    `;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  }
}
