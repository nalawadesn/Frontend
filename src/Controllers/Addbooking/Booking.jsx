import React, { useState } from "react";
import "./Booking.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addbooking = (props) => {
  const navigate = useNavigate();
  const [CategoryTitle, setCategoryTitle] = useState();
  const [AddId, setAddId] = useState();
  const [UserId, setUserId] = useState();
  const [CityName, setCityName] = useState();
  const [PublicationName, setPublicationName] = useState();
  const [AddImage, setAddImage] = useState();
  const [RowColumn, setRCvalues] = useState();
  const [Addprice, setAddPrice] = useState();

  const navigateToPayment = () => {
    navigate("/Payment");
  };

  async function onSubmitForm(event) {
    event.preventDefault();
    console.log(typeof(CategoryTitle));
    console.log(AddId, typeof(AddId));
    console.log(UserId, typeof(parseInt(AddId)));
    console.log(CityName);
    console.log(PublicationName);
    console.log(AddImage);
    console.log(typeof(RowColumn));
    console.log(typeof(Addprice));

    //change data and url
    await axios
      .post("https://localhost:44354/api/Booking", {
        BkId: 0,
        CategoryTitle: CategoryTitle,
        AddId: parseInt(AddId),
        UserId: parseInt(UserId),
        CityName: CityName.toString().trim(),
        PublicationName: PublicationName.toString().trim(),
        AddImg: AddImage.toString().trim(),
        RowColumn: RowColumn.toString().trim(),
        AddPrice: parseFloat(Addprice),
        // AddPrice: parseInt(Addprice.toString().trim()),
      })
      .then(response => {
        if(response.status === 201){
          alert('Successfully Added')
        } else {
          navigate('/Booking')
        }
      })
      .then((a) => {
        console.log(a);
        setCategoryTitle("");
        setAddId("");
        setUserId("");
        setCityName("");
        setPublicationName("");
        setAddImage("");
        setRCvalues("");
        setAddPrice("");
      })
      .then(() => {
        navigateToPayment();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center content-center h-screen">
      <div className="bg-slate-400 bg-opacity-50 flex flex-col items-center p-10 rounded-xl border border-md shadow-xl backdrop-blur-xl">
        <h1 className="text-3xl font-bold text-center">Booking</h1>
        <div className="">
          <form onSubmit={onSubmitForm} className="">
            <div className="my-2">
              <label htmlFor="SelectCategory">Category Title: </label>
              <select
                name="SelectCategory"
                onChange={(a) => setCategoryTitle(a.target.value)}
                value={CategoryTitle}
                type="text"
                placeholder="Enter Category Title"
                required
                className="px-2 py-1 bg-gray-200 rounded-full"
              >
                <option value="--select--" defaultValue={true}>-- select --</option>
                <option value="Classified ads">Classified ads</option>
                <option value="Business">Business</option>
                <option value="Announcements">Announcements</option>
                <option value="Recruitment">Recruitment</option>
                <option value="Matrimony">Matrimony</option>
                <option value="Education">Education</option>
              </select>
            </div>
            <div className="my-2">
              <label className="add_label">Ad Id: </label>
              <input
                className="px-2 py-1 bg-gray-200 rounded-full"
                onChange={(a) => setAddId(a.target.value)}
                value={AddId}
                type="number"
                placeholder="Enter Add Id"
                name="uname"
                required
              ></input>
            </div>
            <div className="my-2">
              <label className="add_label">User Id: </label>
              <input
                className="px-2 py-1 bg-gray-200 rounded-full"
                onChange={(a) => setUserId(a.target.value)}
                value={UserId}
                type="number"
                placeholder="Enter User Id"
                name="uname"
                required
              ></input>
            </div>
            <div className="my-2">
              <label className="add_label">City Name: </label>
              <input
                className="px-2 py-1 bg-gray-200 rounded-full"
                onChange={(a) => setCityName(a.target.value)}
                value={CityName}
                type="text"
                placeholder="Enter City Name"
                name="uname"
                required
              ></input>
            </div>
            <div className="my-2">
              <label className="add_label">Publication Name: </label>
              <input
                className="px-2 py-1 bg-gray-200 rounded-full"
                onChange={(a) => setPublicationName(a.target.value)}
                value={PublicationName}
                type="text"
                placeholder="Enter Publication Name"
                name="uname"
                required
              ></input>
            </div>
            <div className="my-2">
              <label className="add_label">Add Image: </label>
              <input
                className="px-2 py-1 bg-gray-200 rounded-full"
                onChange={(a) => setAddImage(a.target.value)}
                value={AddImage}
                type="text"
                placeholder="Enter Item"
                name="uname"
                required
              ></input>
            </div>
            <div className="my-2">
              <label>Select Row Column Values: </label>
              <select
                className="px-2 py-1 bg-gray-200 rounded-full"
                onChange={(a) => setRCvalues(a.target.value)}
                value={RowColumn}
                type="text"
                placeholder="Enter Row and column values"
                required
              >
                <option value="--select--" defaultValue={true}>-- select --</option>
                <option value="R1_C1">R1_C1 750</option>
                <option value="R1_C2">R1_C2 750</option>
                <option value="R1_C3">R1_C3 750</option>
                <option value="R2_C1">R2_C1 1000</option>
                <option value="R2_C2">R2_C2 1000</option>
                <option value="R2_C3">R2_C3 1000</option>
                <option value="R3_C1">R3_C1 500</option>
                <option value="R3_C2">R3_C2 500</option>
                <option value="R3_C3">R3_C3 500</option>
              </select>
            </div>
            <div className="my-2">
              <label>Select Price for RC: </label>
              {/* <input className='add_input_text' onChange={(a) => setDesc(a.target.value)} value={Addprice} type="number" placeholder='Enter Amount' name="uname" required></input> */}
              <select
                className="px-2 py-1 bg-gray-200 rounded-full"
                onChange={(a) => setAddPrice(a.target.value)}
                value={Addprice}
                placeholder="Enter Amount"
                itemType="number"
                required
              >
                <option value="--select--" defaultValue={true}>-- select --</option>
                <option value="500">500</option>
                <option value="750">750</option>
                <option value="1000">1000</option>
              </select>
            </div>
            <button className="bg-cyan-400 px-4 py-2 rounded-full border my-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addbooking;
