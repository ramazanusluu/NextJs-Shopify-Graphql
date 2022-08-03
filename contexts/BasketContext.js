import React, { useState, createContext, useContext, useEffect } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  //Sepete atılan ürünler items olarak düşünülebilir varsayılan olarak sepette ürün yok
  const [items, setItems] = useState([]);

  //sepete ekleme işlemlerinin yapılabilmesi için gerekli;

  const AddToBasket = (data, findBasketItem) => {
    if (!findBasketItem) {
      return setItems((items) => [data, ...items]);
    }
    const filtered = items.filter(
      (item) => item.product.id !== findBasketItem.product.id
    );
    setItems(filtered);
  };

  const values = {
    items,
    setItems,
    AddToBasket,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};
const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
