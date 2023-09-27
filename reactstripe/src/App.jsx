import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <h3 style={{ textAlign: "center", fontSize: "40px" }}>
        Stripe Payment System
      </h3>
      <Outlet />
    </>
  );
}

export default App;
