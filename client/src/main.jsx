import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import { IpfsProvider } from "./context/IpfsContext";
import "./index.css";

ReactDOM.render(
  <IpfsProvider>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </IpfsProvider>,
  document.getElementById("root"),
);
