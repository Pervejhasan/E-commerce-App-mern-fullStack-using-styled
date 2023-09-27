const Success = () => {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="../../public/images/logo.png"
        alt="logo-image"
        style={{
          height: "90px",
          width: "120px",
          border: "2px solid gray",
          borderRadius: "5px",
        }}
      />
      <h3
        style={{
          backgroundColor: "teal",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          margin: "15px",
        }}
      >
        Successful
      </h3>
      <p style={{ textAlign: "center", margin: "10px" }}>
        Your order is being prepared.{" "}
      </p>
      <span style={{ marginTop: "5px" }}>
        Thanks for choosing <b>Richman Shop</b>
      </span>
    </div>
  );
};

export default Success;
