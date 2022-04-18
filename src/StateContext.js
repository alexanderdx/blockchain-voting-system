import { createContext, useEffect, useState } from "react";

import Web3 from "web3";
import ABI from "./ABI";

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

const StateContext = createContext({
  user: null,
  contract: null,
});

const StateContextProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    contract: null,
  });

  async function initializeContract() {
    const accounts = await web3.eth.requestAccounts();
    const user = accounts[0];

    const contract = new web3.eth.Contract(
      ABI.abi,
      ABI.networks["5777"].address,
      {
        from: user,
      }
    );

    setState({ user, contract });
  }

  useEffect(() => {
    async function setup() {
      await initializeContract();
    }

    setup();
  }, []);

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export { StateContext, StateContextProvider };
