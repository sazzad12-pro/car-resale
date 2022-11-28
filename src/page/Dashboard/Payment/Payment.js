import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../../component/Loading/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const bookingInfo = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div className="w-96 my-6">
      <Elements stripe={stripePromise}>
        <CheckoutForm bookingInfo={bookingInfo} />
      </Elements>
    </div>
  );
};

export default Payment;
