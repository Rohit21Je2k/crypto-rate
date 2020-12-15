import React, { useState, useEffect } from "react";
import AssetApi from "../API/AssetApi";

import "./Rate.css";

function Rate(props) {
  const [exchangeRate, setExchangeRate] = useState("");
  async function getAssetPriceUSD() {
    setExchangeRate("Loading");
    const cryptoPriceUSD = await AssetApi(props.crypto.asset_id);
    const fiatPriceUSD = await AssetApi(props.fiat.asset_id);
    const exchRate = (cryptoPriceUSD / fiatPriceUSD).toFixed(6);
    setExchangeRate(`1 ${props.crypto.name} = ${exchRate} ${props.fiat.name}`);
  }
  useEffect(getAssetPriceUSD, [props.reloadApi]);

  return <h3>{exchangeRate}</h3>;
}
export default Rate;
