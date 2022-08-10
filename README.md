# NEXT.JS-Shopify-Graphql 

Shopify GraphQL Storefront API kullanarak geliştirmiş olduğum NEXT.JS projesidir.

### Proje çalıştımadan önce dikkat edilmesi gereken hususlar;
* Proje'yi development server üzerinden çalıştırmadan önce `npm install` komutu ile gerekli olan node_modules paketlerini yükleyiniz.
* Proje kök dizininde `.env.local` adında bir dosya oluşturarak shopify accesstoken ve domain bilgilerinizi ekleyiniz.
```
SHOPIFY_STOREFRONT_ACCESSTOKEN='##########################'
SHOPIFY_STORE_DOMAIN='######################'
```

Projeyi development server üzerinden çalıştırmak için aşağıdaki komutları kullanınız.

```bash
npm run dev
# or
yarn dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek sonucu görebilirsiniz. 

## Daha fazla bilgi edinin
Next.js hakkında daha fazla bilgi edinmek için aşağıdaki kaynaklara göz atın:

- [Next.js Documentation](https://nextjs.org/docs) -  Next.js özellikleri ve API hakkında bilgi edinin.
- [Learn Next.js](https://nextjs.org/learn) -  etkileşimli bir Next.js öğreticisi.

# Proje Görselleri
### Ana Sayfa üzerinde
* Navbar
* Shopify mağzasında oluşturulan ve içerisine ürünler eklenen collection'lar
* Footer

Yer almaktadır.
![Ekran Görüntüsü (175)](https://user-images.githubusercontent.com/98388628/184003274-de169123-5a07-4217-a338-2e5195d27b81.png)


 Ana Sayfa üzerinde bulunan veya Navbar üzerinden ulaşılan collection'lara tıklanıldığında ilgili ürünler listelenir.
![image](https://user-images.githubusercontent.com/98388628/184005751-c6e020a4-10b2-4ad8-83cc-fbbcd1491b17.png)


### Navbar üzerinde bulunan Products butonuna tıklanıldığında ise tüm ürünlerin listelendiği sayfaya yönlendirilir.
![Ekran Görüntüsü (177)](https://user-images.githubusercontent.com/98388628/184006251-5610dde1-baf0-4fb4-80df-9d0fb6395639.png)
![Ekran Görüntüsü (178)](https://user-images.githubusercontent.com/98388628/184006190-bd3eaddc-533c-44a1-956f-e9dc5eb4fa57.png)
![Ekran Görüntüsü (179)](https://user-images.githubusercontent.com/98388628/184006281-6e24c62b-744b-4009-acc8-8906b702fa94.png)


Ürünler üzerine tıklandığında ürün detay sayfalarına yönlendirilme işlemi gerçekleştirilir.
![image](https://user-images.githubusercontent.com/98388628/184006671-d8a31af2-cbcd-41bc-b71a-1a418cc89caf.png)

 Ürün detay sayfasında bulunan Add To Card butonu ile ürünler Card'a eklenir.
![image](https://user-images.githubusercontent.com/98388628/184006929-eb882b95-18bc-4bb2-ae90-0efd10d50457.png)
![image](https://user-images.githubusercontent.com/98388628/184007094-9d09437d-3f3b-482c-87d7-a0ad5d2af52e.png)


