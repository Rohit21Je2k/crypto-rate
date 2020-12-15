import React, { useState } from "react";
import Heading from "./Heading/Heading";
import Form from "./Form/Container/Form";
import Rate from "./Rate/Rate";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme/Theme";

import "./styles.css";

function App() {
  const [crypto, setCrytpo] = useState();
  const [fiat, setFiat] = useState();
  const [showRate, setShowRate] = useState(false);
  const [reloadApi, setReloadApi] = useState(false);

  function handleClick() {
    setShowRate(true);
    setReloadApi((prevValue) => !prevValue);
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme} >
      <Heading />
      <Form
        cryptoInput={(event, newValue) => setCrytpo(newValue)}
        fiatInput={(event, newValue) => setFiat(newValue)}
        onButtonClick={handleClick}
        buttonDisabled={crypto && fiat ? false : true}
      />
      {showRate && <Rate crypto={crypto} fiat={fiat} reloadApi={reloadApi} />}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
