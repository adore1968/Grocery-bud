import React from "react";
import { useGlobalContext } from "./context/AppContext";
import Alert from "./components/Alert";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const { alert, list } = useGlobalContext();
  return (
    <div className="min-h-screen bg-gray-800">
      <section className="min-h-screen px-5 sm:px-8 py-5 sm:py-8 flex justify-center items-center">
        <div className="bg-white p-5 rounded shadow-white container sm:max-w-2xl">
          {alert.show ? <Alert alert={alert} /> : null}
          <Form />
          {list.length > 0 ? <List /> : null}
        </div>
      </section>
    </div>
  );
}

export default App;
