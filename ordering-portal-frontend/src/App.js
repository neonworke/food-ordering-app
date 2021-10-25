import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import FoodItems from './components/FoodItems'
import FoodSubItems from './components/FoodSubItem'
import Cart from './components/Cart';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [cartItems, updateCart] = useState([]);
  const [foodItemsList, updateFoodItemsList] = useState([]);
  function fetchAllOrders() {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/orderItems/getallorders`)
      .then(function (response) {
        // handle success
        updateCart(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  useEffect(() => {
    fetchAllOrders();
  }, []);

  function handleAddToCart(item) {
    updateCart((cartItems) => [...cartItems, item]);
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/orderItems/addorders`, item)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const removeItem = (item) => {
    const newItem = cartItems.filter(i => {
      return i !== item;
    });
    updateCart([...newItem]);
  }

  function handleRemoveFromCart(itemToBeRemoved) {
    const updatedCartItems = cartItems.filter((item) => {
      return item.id !== itemToBeRemoved.id;
    });
    updateCart(updatedCartItems);
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/orderItems/deleteall`, {
        data: {
          id: itemToBeRemoved.id,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function clearCart() {
    handleRemoveFromCart([]);
  }
  return (
    <div className="App">
      <Router>
        <Header cartItems={cartItems} />
        <Route
          path="/"
          exact
          render={(props) => (
            <FoodItems foodItemsList={foodItemsList} updateFoodItemsList={updateFoodItemsList} />
          )}
        />
        <Route
          path="/foodSubItem/:foodCategory"
          render={(props) => (
            <FoodSubItems
              handleAddToCart={handleAddToCart}
              locationProps={props}
              foodItems={foodItemsList}
            />
          )}
        />
        <Route
          exact
          path="/cart"
          render={(props) => (
            <Cart
              items={cartItems}
              handleRemoveFromCart={removeItem}
              clearCart={clearCart}
            />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
