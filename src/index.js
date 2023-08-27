import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import pizzaData from "./ObjectArray";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co</h1>
      <Order />
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu </h2>
      {numPizzas > 2 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              photoName={pizza.photoName}
            />
          ))}
        </ul>
      ) : (
        <p> We ate the last slice, come back to maybe tomorrow </p>
      )}
    </main>
  );
};

const Pizza = (props) => {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <li>
        <h2> {props.name} </h2>
        <p> {props.ingredients} </p>

        <span> {props.price} </span>
      </li>
    </div>
  );
};

const Order = ({ closedHour }) => {
  return (
    <div className="order ">
      <h2> Your order </h2>
      <p> You have ordered 3 pizzas </p>
      <p> Total: 36$ </p>
    </div>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 12;
  const isOpen = hour >= openHour && hour <= closedHour;

  if (!isOpen) return <p> We are currently closed</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Orders closedHour={closedHour} openHour={openHour} />
      ) : (
        <p>
          We're currently open until {closedHour}:00 for orders, or you can
          order with us online
        </p>
      )}
    </footer>
  );
};

function Orders({ closedHour, openHour }) {
  return (
    <div className="order">
      <p>
        {" "}
        We're currently opened until {closedHour}:00 or order with us online, we
        are open {openHour}{" "}
      </p>

      <button className="btn"> order Now</button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {" "}
    <App />
  </React.StrictMode>
);
