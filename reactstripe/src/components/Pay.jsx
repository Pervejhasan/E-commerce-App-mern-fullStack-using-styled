import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
const publish_key =
  "pk_test_51NqTK7KysXtpKGvvuyMm68hA7SXLX9OHkl7r2LrHj0BXoDaWxiK2jw8eomN1uGJZmHmxiH2D9psqeOOG3KRMkGn100soHawIWI";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );

        console.log(res.data);
        navigate("/success");
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>processing...</span>
      ) : (
        <StripeCheckout
          name="Richman Shop"
          image="../../public/images/logo.png"
          billingAddress
          shippingAddress
          description="Your total is 20$"
          amount={2000}
          token={onToken}
          stripeKey={publish_key}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: "5px",
              padding: "20px",
              background: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
