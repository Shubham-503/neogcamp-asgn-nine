import React, { useState } from "react";
import "./App.css";

const mobiles = [
  { title: "Redmi Note 9 Pro", price: "13,999" },
  { title: "Poco M2 Pro", price: "13,999" },
  { title: "Samsung Galaxy M31 Prime Edition ", price: "16,499" },
];

const Laptops = [
  { title: "HP 14 Thin & Light 14-inch FHD Laptop", price: "43,580" },
  { title: "Dell Inspiron 3593 15.6-inch FHD Laptop", price: "41,380" },
  { title: "Apple MacBook Air ", price: "67,990" },
];

const Accessories = [
  { title: "Boat NIRVANAA Noise Cancelling Headphones", price: "9,999" },
  { title: "Apple AirPods", price: "12,990" },
  { title: "Sony Extra Bass Bluetooth Earbuds", price: "9,018" },
];

function App() {
  const [data, setData] = useState(mobiles);
  function handleMobilesClick() {
    setData(mobiles);
  }
  function handleLaptopsClick() {
    setData(Laptops);
  }
  function handleAccessoriesClick() {
    setData(Accessories);
  }
  return (
    <div className="app">
      <div className="app__title">
        <h1>
          <img
            style={{ width: "60px", marginRight: "0.3em" }}
            src="https://image.shutterstock.com/z/stock-vector--electronic-gadgets-with-screen-in-a-icons-showing-an-idea-of-network-devices-1134205409.jpgj"
          />
          Gadgets Suggestions
        </h1>
        <p>Checkout these gadgets before buying something new.</p>
      </div>
      <ul className="app__items ">
        <li onClick={handleMobilesClick}>Mobiles</li>
        <li onClick={handleLaptopsClick}>Laptops</li>
        <li onClick={handleAccessoriesClick}>Accessories</li>
      </ul>
      <hr />
      <ul className="app__desc">
        <li className="card">
          <div className="title">
            <strong> {data[0].title}</strong>
          </div>
          <div className="price">Rs.{data[0].price}</div>
        </li>
        <li>
          <div className="title">
            <strong>{data[1].title}</strong>
          </div>
          <div className="price">Rs. {data[1].price}</div>
        </li>
        <li>
          <div className="title">
            <strong>{data[2].title}</strong>
          </div>
          <div className="price">Rs. {data[2].price}</div>
        </li>
      </ul>
    </div>
  );
}

export default App;
