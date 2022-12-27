import React from "react";
import Table from "react-bootstrap/Table";
import { CiMail } from "react-icons/ci";
import { FaTwitterSquare, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaRegSmile } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-evenly h-screen bg-gray-100 bg-opacity-50">
      <div className="font-bold">
        <h1>
          <b>
            <center className="text-5xl">CONTACT US !!!</center>
          </b>
        </h1>
        <br />
        <h3>
          {" "}
          <center>
            We will be happy to serve you <FaRegSmile smile="2rem" />. Please
            choose to Contact Us from below options.{" "}
          </center>
        </h3>
      </div>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>HAVE QUESTION? CALL US :</th>
            <th>EMAIL :</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <FaWhatsapp size="2rem" />
              +91-9683451578 (We're Available Monday - Saturday[10AM-7PM])
            </td>
            <td>
              <CiMail size="2rem" /> custcare@gmail.com
            </td>
          </tr>
        </tbody>
      </Table>

      <div className="">
        <center>
          <h4>
            <b>CUSTOMER RELATIONS OFFICE......</b>
          </h4>
        </center>
        <br />
        <center>
          <h6>
            5-7-570/11/B/A, 3RD FLOOR, AHUJA ESTATE, LANE OPP. TO SANTOSH SAPNA
            THEATRE, ABIDS, HYDERABAD. INDIA
          </h6>
        </center>

        <center>
          {" "}
          <h4>
            <b>NEWSPAPER RELATIONS OFFICES :</b>
          </h4>
          <br />
          <h6>* Sampige Road, Malleswaram, Bangalore</h6>
          <h6>* Second Floor, Janakpuri, New Delhi</h6>
          <h6>* L.B.S. Marg, Ghatkopar West, Mumbai</h6>
          <h6>* 15th Lane, Prabhat Road, Pune</h6>
          <h6>* 8th Cross, Nemilicherry, Thuruninravur, Chennai</h6>
        </center>
        <div>
          <center>
            <h3>
              <b>Follow Us On :</b>
            </h3>
          </center>
          <center>
            <table>
              <td>
                <FaWhatsapp size="6rem" />{" "}
                <td>
                  <b>
                    <h4>
                      Whatsapp:
                      <br />
                      +91-9683451578
                    </h4>
                  </b>
                </td>
              </td>
              <td>
                <CiMail size="6rem" />{" "}
                <td>
                  <b>
                    <h4>
                      EMail:
                      <br />
                      custcare@gmail.com
                    </h4>
                  </b>
                </td>
              </td>
              <td>
                <FaFacebook size="6rem" />{" "}
                <td>
                  <b>
                    <h4>
                      Facebook:
                      <br />
                      Customercare_Ad
                    </h4>
                  </b>
                </td>
              </td>
              <td>
                <FaTwitterSquare size="6rem" />{" "}
                <td>
                  <b>
                    <h4>
                      Twitter:
                      <br />
                      Customercare_Ad
                    </h4>
                  </b>
                </td>
              </td>
              <td>
                <IoLogoInstagram size="6rem" />{" "}
                <td>
                  <b>
                    <h4>
                      Instagram:
                      <br />
                      Customercare_Ad
                    </h4>
                  </b>
                </td>
              </td>
            </table>
          </center>
        </div>
      </div>

      <div className="last">
        <span style={{ color: "white" }}>
          <center>Copyright 2022 @ Ads2Publish.com All Rights Reserved.</center>
        </span>
      </div>
    </div>
  );
};

export default ContactUs;
