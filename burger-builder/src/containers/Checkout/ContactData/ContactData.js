import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };

  render() {
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data</h4>
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
          <Button buttonType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
