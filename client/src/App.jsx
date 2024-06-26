import Layout from "./page";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./page/Dashboard";
import Income from "./page/Income";
import Expense from "./page/Expense";
import Payment from "./page/Payment";
import Cards from "./page/Card";
import Setting from "./page/Setting";
import Help from "./page/Help";
function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Dashboard showPopup={showPopup} setShowPopup={setShowPopup} />
              }
            />
            <Route
              path="income"
              element={<Income setShowPopup={setShowPopup} />}
            />
            <Route
              path="expense"
              element={<Expense setShowPopup={setShowPopup} />}
            />
            <Route path="payments" element={<Payment />} />
            <Route path="mycards" element={<Cards />} />
            <Route path="setting" element={<Setting />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
