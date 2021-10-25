import React from "react";
import { useHistory } from "react-router-dom";
export default function Cart({ items, handleRemoveFromCart, clearCart }) {
  const history = useHistory();
  function handlePlaceOrder(params) {
    clearCart();
    history.push("/");
  }
  let addedItems = items.length ? (
    items.map((item) => {
      return (
          <div key={item.name} className="flex justify-center items-center w-full h-full">
            <div className="h-auto w-3/6 border shadow-lg mt-2">
            <div className="mt-2">
            <div className="float-right w-36 h-24 mr-4 mt-2">
              <img src={item.image} alt={item.name} className="rounded-md" />
          </div>
            <div className="text-left ml-4 mt-2">
          <div className=" font-medium">{item.name}</div>
          <div className="text-gray-400">{item.description}</div>
          <div className="font-bold my-2">Price Rs.{item.price}</div>
          <div className="my-2"><button
                  className="bg-red-700 text-white px-1.5 py-1 rounded"
                  onClick={() => {
                    handleRemoveFromCart(item);
                  }}
                >
                  Remove
                </button></div>
          </div>
          </div>
          </div>
          </div>
      );
    })
  ) : (
    <p>Nothing</p>
  );
  return (
    <div className="">
      <div className="mt-4">
        <div className="font-medium text-xl">You have ordered:</div>
        <div className="">{addedItems}</div>
        <div className="mt-4">
          <button
            className="bg-red-700 text-white px-1.5 py-1 rounded"
            onClick={() => handlePlaceOrder()}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
