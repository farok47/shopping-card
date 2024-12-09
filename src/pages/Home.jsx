import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTail from "../components/ProductTail";

function Home() {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(false);

  async function fetchdata() {
    setloading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (data) setloading(false);
    setproducts(data);
  }

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color={"rgb(127,29,29)"}
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products
            ? products.map((item,index) => <ProductTail product={item} key={index} />)
            : null}
        </div>
      )}
    </div>
  );
}

export default Home;
