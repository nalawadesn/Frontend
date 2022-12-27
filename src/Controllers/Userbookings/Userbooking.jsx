import React, { useState } from 'react'
import { Route, Link, useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import "../Userbooking/Userbooking.css"

const Userbookings = () => {
    const [UserEmail, setEmail] = useState("");
    const navigate = useNavigate();

    function navigateToAdmin(){
        navigate("/admin")
    }

    function onChangeUserEmail(a) {
        setEmail(a);
    }

    function submitForm(event) {
        event.preventDefault();
        console.log(UserEmail);
        setEmail("");
        navigateToAdmin();
    }

    return (
        <div className='background'>

            <div className='Userbookings'>


                <div className='Userbookingform'><h1>User Bookings</h1>
                    <form onSubmit={submitForm}>
                        <div className='text-field'>
                            <label className='label'>User Email</label>
                            <input onChange={(a) => onChangeUserEmail(a.target.value)} value={UserEmail} className='input-text' type="text" placeholder="  Enter User Email" name="admin" required></input>
                        </div>
                        <div className='sized-box'></div>
                        <button className='button'>
                            {/* <Link to='/home'>Submit</Link> */}
                            {/* <Link to='/admin'> */}
                                Submit
                                {/* </Link> */}
                        </button>

                    </form>
                </div>
                <div className='image'></div>

            </div>


        </div>
    )
}

export default Userbookings