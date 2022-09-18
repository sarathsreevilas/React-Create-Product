import React, { useState } from "react";
import { phonesData } from "./product.data";
import { Card, Button } from "react-bootstrap";

const Products = () => {
  const [items, setItems] = useState(phonesData);

  const decQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id  && item.qty > 1  ? { ...item, qty: item.qty - 1 } : item
    );
    setItems(newItem);
  };
  const incQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(newItem);
  };

  return (
    <div>
      <h1 className="bg-info text-white">Products</h1>

      {items.map((item) => (
        <div  className="d-inline-flex">
          <Card
            className="shadow p-3 mb-2 m-3 bg-body rounded"
            style={{ width: "15rem" }}
          >
            <Card.Img
              style={{ height: "15rem" }}
              clasName="p-2"
              variant="top"
              src={require(`./asset/${item.image}.png`)}
            />
            <Card.Body>
              <Card.Title className="text-danger"><strong>{item.model}</strong></Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              <h3>Price: ₹ {item.price}</h3>
              <div>
                <p>
                  Qty:
                  <Button onClick={() => decQty(item.id)} className="m-1 ">
                    -
                  </Button>
                  {item.qty}
                  <Button onClick={() => incQty(item.id)} className="m-1 ">
                    +
                  </Button>
                </p>
              </div>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Products;
