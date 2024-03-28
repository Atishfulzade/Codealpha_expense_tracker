import Layout from "./page";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./page/Dashboard";
import Income from "./page/Income";
import Expense from "./page/Expense";
import Payment from "./page/Payment";
import Cards from "./page/Card";
import AlertDialogSlide from "./component/DialogBox";
import Setting from "./page/Setting";
import Help from "./page/Help";
function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {showPopup && <AlertDialogSlide setShowPopup={setShowPopup} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="expense" element={<Expense />} />
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
