import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addtocard, removefromcard } from "../pages/store/slices/card-slice";

function ProductTail({ product }) {
  const { card } = useSelector((state) => state);

  const dispatch = useDispatch();
  function handleadd() {
    dispatch(addtocard(product));
  }
  function handleremove() {
    console.log("removed");
    dispatch(removefromcard(product.id));
  }
  return (
    <div>
      <div className="group flex flex-col items-center border-2 borde-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product.id}
            className="object w-full h-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5 ">
          <button
            onClick={
              card.some((item) => item.id === product.id)
                ? handleremove
                : handleadd
            }
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            {card.some((item) => item.id === product.id)
              ? "remove from card"
              : "add to card"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductTail;
