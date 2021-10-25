import React from 'react'
export default function FoodSubItems(props) {
    const foodItemsObject = props.foodItems.find((item) => {
      return item.name === props.locationProps.match.params.foodCategory;
    });
    console.log("Info", foodItemsObject);
    const foodItemsData = foodItemsObject.subItemsData.subItems.map((subItem) => {
      return (
        <div key={subItem.name} className="flex justify-center items-center w-full h-full mt-4">
          <div className="h-auto w-3/6 border shadow-lg">
            <div className="mt-2">
            <div className="float-right w-36 h-24 mr-4 mt-2">
              <img src={subItem.image} alt={subItem.name} className="rounded-md" />
          </div>
            <div className="text-left ml-4 mt-2">
          <div className=" font-medium">{subItem.name}</div>
          <div className="font-normal text-gray-500">₹{subItem.price}</div>
          <div className="text-gray-400">{subItem.description}</div>
          <div className="my-2"><button
                  className="bg-red-700 text-white px-1.5 py-1 rounded"
                  onClick={() => props.handleAddToCart(subItem)}
                >
                  Order Now
                </button></div>
          </div>
          </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div>{foodItemsData}</div>
      </div>
    );
}