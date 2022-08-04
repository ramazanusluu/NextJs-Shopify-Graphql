import React, { useState, createContext, useContext, useEffect } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  //Sepete atılan ürünler items olarak düşünülebilir varsayılan olarak sepette ürün yok
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("basket"));
    if (data) {
      setItems((prev) => [...prev, ...data]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);

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

  //Sepetten ürün silme işlemi için gerekli fonksiyon;

  const removeFromBasket = (item_id) => {
    const filtered = items.filter((item) => item.product.id !== item_id);
    setItems(filtered);
  };

  const values = {
    items,
    setItems,
    AddToBasket,
    removeFromBasket,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};
const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
