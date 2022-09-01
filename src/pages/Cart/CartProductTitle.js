import React, { useState, useEffect } from "react";

import "./CartProductTitle.scss";
import Price from "./Price";
import Product from "./Product";

function CartProductTitle() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProduct(data.cart));
  }, []);
  console.log(product);
  return (
    <div className="Cart-product-container">
      <div className="Cart-product-title">
        <input type="checkbox" />
        <p className="img">이미지</p>
        <p className="product">상품정보</p>
        <p className="price">판매가</p>
        <p className="common">수량</p>
        <p className="common">적립금</p>
        <p className="common">배송구분</p>
        <p className="common">배송비</p>
        <p className="price">합계</p>
        <p className="choice">선택</p>
      </div>
      {product?.map((item, idx) => {
        return <Product item={item} />;
      })}

      <Price />
    </div>
  );
}

export default CartProductTitle;
