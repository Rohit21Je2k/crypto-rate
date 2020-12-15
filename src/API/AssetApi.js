import axios from "axios";
async function AssetApi(asset_id) {
  let asset;
  do {
    asset = await axios(`https://rest.coinapi.io/v1/assets/${asset_id}`)
      .then((res) => res.data[0])
      .catch((err) => false);
  } while (!asset);
  return new Promise((resolve, reject) => resolve(asset.price_usd));
}

export default AssetApi;
