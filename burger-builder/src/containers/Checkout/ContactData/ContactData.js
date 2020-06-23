import React, { Component } from "react";
import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import styles from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
    price: 0,
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log("I AM HERE! with");
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      deliveryMethod: "Fastest",
      price: this.props.price,
      customer: {
        name: "Some One",
        address: {
          street: "Somewhere 141",
          zipcode: "12345",
          country: "Mars",
        },
        email: "test@test.com",
      },
    };
    console.log("ORDER:", order);
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={styles.Input}
          type="text"
          name="name"
          placeholder="Full Name"
        />
        <input
          className={styles.Input}
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className={styles.Input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className={styles.Input}
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button buttonType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
