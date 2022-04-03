# Blockchain Voting Platform


## Run the app locally
* Make sure Ganache is running
* Make sure you have Metamask setup with your local Ganache network
* Run `truffle deploy --network development`
* Install dependencies: `npm install`
* Run the app: `npm start`
* Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Development

### Deploying contracts
* Run ```truffle deploy --network development``` inside the root directory
* You should see a ```Contract Creation``` transaction inside Ganache's transactions tab
* The contract has been deployed and the app is ready to use

### Updating contracts

Contracts are immutable, meaning any changes made to a contract require its re-deployment in order to update it on the blockchain. To deploy your changes:

* Run ```truffle migrate --network development --reset```
* ⚠️ Copy ```build/Voting.json``` to ```src/ABI.js``` - this is important, otherwise the frontend will still be using the old contract
