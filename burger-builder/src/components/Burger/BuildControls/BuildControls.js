import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import * as constants from "../../../constants/ingredient-prices";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  let checkIngredients =
    props.ingredients.salad ||
    props.ingredients.bacon ||
    props.ingredients.cheese ||
    props.ingredients.meat;

  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>${props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          add={() => props.addIngredient(ctrl.type)}
          remove={() => props.removeIngredient(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
          price={constants.INGREDIENT_PRICES[ctrl.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.orderClicked}
      >
        {checkIngredients ? (props.isAuth ? "ORDER NOW" : "SIGN IN & ORDER") : "ADD INGREDIENTS"}
      </button>
    </div>
  );
};

export default buildControls;
