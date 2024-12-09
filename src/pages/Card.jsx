import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardTail from "../components/CardTail";

function Card() {
  const [totalcard, settotalcard] = useState(0);
  const { card } = useSelector((state) => state);

  useEffect(() => {
    settotalcard(card.reduce((acc, curr) => acc + curr.price, 0));
  }, card);

  console.log(card, totalcard);
  return (
    <div className="flex justify-center">
      {card && card.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {card.map((carditem) => (
                <CardTail carditem={carditem} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-center items-center p-5 space-y-5 mt-14">
              <h1 className="font-bold text-lg text-red-800 ">your card summmary</h1>
              <p>
                <span className="text-gray-800 font-bold ">total item</span>
                <span>:{card.length}</span>
              </p> <p>
                <span className="text-gray-800 font-bold ">total amount</span>
                <span>:{totalcard}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 text-bold font-bold mb-2">
            your card is empty
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              shop now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Card;
