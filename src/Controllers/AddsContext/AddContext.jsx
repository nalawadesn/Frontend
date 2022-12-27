import React, { useState } from "react";
import "./AddContext.css";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AddContext = (props) => {
  const [AddTitle, setAddTitle] = useState(props.AddTitle);
  const [AddContent, setAddContent] = useState(props.AddContent);
  const [AddDesc, setAddDesc] = useState(props.AddDesc);
  const [AddDate, setAddDate] = useState(props.AddDate);
  const [CategoryTitle, setCategoryTitle] = useState(props.CategoryTitle);
  const navigate = useNavigate();

  const navigateToBooking = () => {
    navigate('/Booking')
  }

  async function onSubmitForm(event) {
    event.preventDefault();
    console.log(AddTitle);
    console.log(AddContent);
    console.log(AddDesc);
    console.log(AddDate);
    console.log(CategoryTitle);
    //change data and url
    await axios
      .post("https://localhost:44354/api/Adds", {
        addId: 0,
        addtitle: AddTitle.toString().trim(),
        addcontent: AddContent.toString().trim(),
        addDesc: AddDesc.toString().trim(),
        adddate: AddDate.toString().trim(),
        categorytitle: CategoryTitle.toString().trim(),
      })
      .then((response) => {
        if (response.status === 201) alert("Description Successfully Added");
      })
      .then((a) => {
        console.log(a);
        setAddTitle("");
        setAddContent("");
        setAddDesc("");
        setAddDate("");
        setCategoryTitle("");
        navigateToBooking();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="flex flex-col content-center justify-center items-center h-screen">
      <div className="bg-slate-400 bg-opacity-50 flex flex-col items-center p-10 rounded-xl border border-md shadow-xl backdrop-blur-xl">
        <div>
          <h1 className="text-3xl font-bold text-center">Ad Description</h1>
        </div>
        <div className="">
          <form onSubmit={onSubmitForm} className="">
            <div className="my-2">
              <label className="block">Ad Title: </label>
              <input
                className="bg-gray-300 pl-2 rounded"
                onChange={(a) => setAddTitle(a.target.value)}
                value={AddTitle}
                type="text"
                placeholder="Enter Title"
                name="uname"
                required
              ></input>
            </div>
            <div className="my-2">
              <label className="block">Ad Content: </label>
              <input
                className="bg-gray-300 pl-2 rounded"
                onChange={(a) => setAddContent(a.target.value)}
                value={AddContent}
                type="text"
                placeholder="Enter Add Content"
                name="uname"
                required
              ></input>
            </div>
            <div className="my-2">
              <label className="block">Ad Description: </label>
              <textarea
                className="bg-gray-300 pl-2 rounded"
                onChange={(a) => setAddDesc(a.target.value)}
                value={AddDesc}
                type="text"
                placeholder="Enter Description of Add"
                name="uname"
                required
              ></textarea>
            </div>
            <div className="my-2">
              <label className="block">Date: </label>
              <input
                className="bg-gray-300 pl-2 rounded"
                onChange={(a) => setAddDate(a.target.value)}
                value={AddDate}
                type="text"
                placeholder="dd/mm/yyyy"
                name="uname"
                required
              ></input>
            </div>

            <div className="my-2">
              <label for="SelectCategory" className="block">
                Category Title:{" "}
              </label>
              <select
                className="bg-gray-300 pl-2 rounded"
                name=""
                onChange={(a) => setCategoryTitle(a.target.value)}
                value={CategoryTitle}
                type="text"
                placeholder="Enter Category Title"
                required
              >
                <option value="default" defaultValue={true}>
                  -- Select --
                </option>
                <option value="Classified ads">Classified ads</option>
                <option value="Business">Business</option>
                <option value="Announcements">Announcements</option>
                <option value="Recruitment">Recruitment</option>
                <option value="Matrimony">Matrimony</option>
                <option value="Education">Education</option>
              </select>
            </div>
            <button className="bg-cyan-400 px-4 py-1 rounded-full border-cyan-800 border my-4 ">
              {/* <Link to="/Booking">Submit</Link> */} 
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContext;
