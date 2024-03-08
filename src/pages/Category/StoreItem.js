import React from "react";
import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import FormatCurrency from "../../components/FormatCurrency"; //$
//Passing data in cart
const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useContext(ShoppingCartContext);
  const quantity = getItemQuantity(id); //loop to Count the number of added items
  return (
    <Card className="h-100"> 
      <Card.Img //Used by Data Structure from Jason
        variant="top"
        src={imgUrl}
        style={{ height: "200px", objectFit: "cover" }}
      /> 
      <Card.Body className="d-flex flex-column"> 
        
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4"> 
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span> 
        </Card.Title>

        <div className="mt-auto"> 
          {quantity === 0 ? ( //Start up in 0  
            <Button className="w-80" onClick={() => increaseCartQuantity(id)}>
              Add To Cart
            </Button>
          ) : (
            <div  //margin auto to all card used display flex //column BU under some 
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-2">{quantity} in cart</span>
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button //remove Button color,size,
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
