import React from "react";
import Select from "../Components/Select";
import Button from "../Components/Button";
import Crypto from "../../StaticData/Crypto";
import Fiat from "../../StaticData/Fiat";

import "./Form.css";

function Form(props) {
  return (
    <div className="input-form">
      <Select
        id="crypto"
        data={Crypto}
        onChange={props.cryptoInput}
        label="Crypto"
        placeholder="Enter Crypto"
      />
      <br />
      <Select
        id="fiat"
        data={Fiat}
        onChange={props.fiatInput}
        label="Currency"
        placeholder="Enter Currency"
      />
      <br />
      <Button onClick={props.onButtonClick} disabled={props.buttonDisabled} />
    </div>
  );
}

export default Form;
