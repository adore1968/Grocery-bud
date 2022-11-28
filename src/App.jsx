import React from "react";
import { useGlobalContext } from "./context/AppContext";
import Alert from "./components/Alert";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const { alert, list } = useGlobalContext();
  return (
    <div>
      <section>
        <div>
          {alert.show ? <Alert alert={alert} /> : null}
          <Form />
          {list.length > 0 ? <List /> : null}
        </div>
      </section>
    </div>
  );
}

export default App;
