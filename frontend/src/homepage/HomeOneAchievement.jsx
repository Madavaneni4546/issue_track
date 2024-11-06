import React from "react";
import { Card } from "react-bootstrap";
const HomeOneAchievement = ({ achieve }) => {
  const { header, desc1, desc2, count, color , textcolor} = achieve;
  const cardStyle = {
    backgroundColor: color.toLowerCase(),
    color : textcolor.toLowerCase(),
    textAlign: "center",
    border : `1px solid ${textcolor.toLowerCase()} `
  };
  return (
    <Card
      // bg={color.toLowerCase()}
      key={color}
      // text={color.toLowerCase() === "light" ? "dark" : "white"}
      style={ cardStyle }
      className="mb-2">
      <Card.Header><h5>{header}</h5></Card.Header>
      <Card.Body>
        <Card.Title>{desc1}</Card.Title>
        <Card.Text>
          <h2 className="achieve-count">{count}+</h2>
        </Card.Text>
        <Card.Title>{desc2}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default HomeOneAchievement;
