import { useEffect, useState } from "react";
import "./App.css";

import Web3 from "web3";

import ABI from "./ABI";

function App() {
  const [state, setState] = useState({
    user: null,
    contract: null,
  });

  async function setup() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const accounts = await web3.eth.requestAccounts();
    const user = accounts[0];

    const contract = new web3.eth.Contract(
      ABI.abi,
      ABI.networks["5777"].address,
      {
        from: user,
      }
    );

    console.log(contract);

    setState({ user, contract });
  }

  useEffect(() => {
    setup();
  }, []);

  return <div>Your account is {state.user}</div>;
}

export default App;
