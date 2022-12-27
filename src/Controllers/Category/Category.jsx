import React, { useEffect, useState } from "react";
import "../Category/Category.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AddContext from "../AddsContext/AddContext";

const SelectCategory = (props) => {
  const [CategoryTitle, setCategoryTitle] = useState(props.CategoryTitle);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  async function onSubmitForm(event) {
    console.log("button");
    event.preventDefault();
    console.log(CategoryTitle);

    //change data and url
    navigate('/Context')
  }

  const fetchData = () => {
    fetch("https://localhost:44354/api/Category")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function onChangeCategory(a) {
    console.log(a);
    setCategoryTitle(a);
    console.log(props.CategoryTitle);
  }

  return (
    <div className="flex flex-col h-screen content-center items-center justify-center">
      <div className="bg-white p-10 rounded-xl border border-md shadow-xl">
        <div>
          <h1 className="text-3xl font-bold">Select Category</h1>
        </div>
        <form onSubmit={onSubmitForm} className="block mt-4">
          <div className="add_text_field">
            <label htmlFor="SelectCategory">Category Title: </label>
            {/* <input className='add_input_text' onChange={(a) => setCategoryTitle(a.target.value)} value={CategoryTitle} type="text" placeholder='Enter Row and column values' name="uname" required></input> */}

            <select
              name="SelectCategory"
              onChange={(a) => onChangeCategory(a.target.value)}
              value={CategoryTitle}
              type="text"
              placeholder="Select Category"
              required
              className="border rounded-xl text-black bg-gray-200 "
            >
              <option value="-- Select --" defaultValue={true}>
                -- Select --
              </option>
              {categories.length > 0 &&
                categories.map((category, index) => (
                  <option key={index} value={category.categoryTitle}>
                    {category.categoryTitle}
                  </option>
                ))}
            </select>
          </div>
          <button className="bg-cyan-400 px-4 py-1 rounded-full border-cyan-800 border my-4">
            {/* <Link to="/Context">Submit</Link> */}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SelectCategory;
