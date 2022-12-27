import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Payment = (props) => {
  const [BkId, setBookingId] = useState(props.BkId);
  const [CardType, setCardType] = useState(props.CardType);
  const [CardNumber, setCardNumber] = useState(props.CardNumber);
  const [CardHolderName, setCardHolderName] = useState(props.CardHolderName);
  const [ExpiryDate, setExpiryDate] = useState(props.ExpiryDate);
  const [Cvv, setCvv] = useState(props.Cvv);
  const navigate = useNavigate();

  // const navigateToBooking = () => {
  //   navigate('/UserDashboard')
  // }

  async function onSubmitForm(event) {
    event.preventDefault();
    console.log(BkId);
    console.log(CardType);
    console.log(CardNumber);
    console.log(CardHolderName);
    console.log(ExpiryDate);
    console.log(Cvv);
    //change data and url
    await axios
      .post("https://localhost:44354/api/Payment", {
        paymentId: 0,
        BkId: parseInt(),
        cardtype: CardType.toString().trim(),
        cardnumber: CardNumber.toString().trim(),
        cardholdername: CardHolderName.toString().trim(),
        expirydate: ExpiryDate.toString().trim(),
        cvv: Cvv.toString().trim(),
      })
      .then((response) => {
        if (response.status === 201) alert("Payment Successfull");
      })
      .then((a) => {
        console.log(a);
        setBookingId("");
        setCardType("");
        setCardNumber("");
        setCardHolderName("");
        setExpiryDate("");
        setCvv();
        navigate("/UserDashboard");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="flex flex-col content-center justify-center items-center h-screen">
      <div className="bg-slate-400 bg-opacity-50 flex flex-col items-center p-10 rounded-xl border border-md shadow-xl backdrop-blur-xl">
        <div>
          <h1 className="text-3xl font-bold text-center">Payment</h1>
        </div>
        <div className="">
          <form onSubmit={onSubmitForm} className="">
            <div className="my-2">
              <label className="block">Booking Id:</label>
              <input
                className="bg-gray-300 pl-2 rounded"
                onChange={(a) => setBookingId(a.target.value)}
                value={BkId}
                type="number"
                placeholder="Enter ID"
                name="uname"
                required
              ></input>
            </div>
            <div className="my-2">
              <label htmlFor="SelectCardType" className="block">
                Card Type:{" "}
              </label>
              <select
                className="bg-gray-300 pl-2 rounded"
                name=""
                onChange={(a) => setCardType(a.target.value)}
                value={CardType}
                type="text"
                placeholder="Enter Category Title"
                required
              >
                <option value="default" defaultValue={true}>
                  -- Select --
                </option>
                <option value="American Express">American Express</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Discover Card">Discover Card</option>
                <option value="Rupay Card">Rupay Card</option>
              </select>
            </div>
            <div className="my-2">
              <label className="block">Card Number: </label>
              <input
                className="bg-gray-300 pl-2 rounded"
                onChange={(a) => setCardNumber(a.target.value)}
                value={CardNumber}
                type="text"
                placeholder="Enter Card Number"
                name="uname"
                required
              ></input>
            </div>
            <div className="my-2">
              <label className="block">Card Holder Name: </label>
              <input
                className="bg-gray-300 pl-2 rounded"
                onChange={(a) => setCardHolderName(a.target.value)}
                value={CardHolderName}
                type="text"
                placeholder="Enter Card Holder Name"
                name="uname"
                required
              />
            </div>
            <div className="my-2">
              <label className="block">Expiry Date: </label>
              <input
                className="bg-gray-300 pl-2 rounded"
                onChange={(a) => setExpiryDate(a.target.value)}
                value={ExpiryDate}
                type="text"
                placeholder="mm/yy"
                name="uname"
                required
              ></input>
            </div>
            <div className="my-2">
              <label className="block">CVV Number: </label>
              <input
                className="bg-gray-300 pl-2 rounded"
                onChange={(a) => setCvv(a.target.value)}
                value={Cvv}
                type="password"
                placeholder="CVV/CVC"
                name="uname"
                required
              ></input>
            </div>
            <button className="bg-cyan-400 px-4 py-1 rounded-full border-cyan-800 border my-4 ">
              {/* <Link to="/UserDashboard">Submit</Link>  */}
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
