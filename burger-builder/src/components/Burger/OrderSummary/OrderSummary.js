import React from "react";

import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]} x {props.ingredientPrices[igKey]}$ ={" "}
        <strong>
          {(props.ingredients[igKey] * props.ingredientPrices[igKey]).toFixed(
            2
          )}
          $
        </strong>
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        <li>
          Top Bun: <strong>2.5$</strong>
        </li>
        {ingredientSummary}
        <li>
          Bottom Bun: <strong>1.5$</strong>
        </li>
      </ul>
      <p>
        <strong>Total price: {props.price.toFixed(2)}$</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button buttonType="Danger" clicked={props.purchaaseCancel}>
        CANCEL
      </Button>
      <Button buttonType="Success" clicked={props.purchaseAccept}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
