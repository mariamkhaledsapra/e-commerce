import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../../data/items.json";
import StoreItem from "./StoreItem";
const Home = () => {
  return (
    <>
                       //NO of cart Response & gab spas
      <h1>sections</h1>  
      <Row md={3} xs={2} lg={4} className="g-3"> 
        {storeItems.map((item) => (      //loop for card 
          <Col key={item.id}>
            <StoreItem {...item} />  
          </Col> //js object spread operators
        ))}
      </Row>
    </>
  );
};

export default Home;
