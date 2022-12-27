import React from "react";
import Table from "react-bootstrap/Table";
import BookClassifiedAd from "./../../images/BookClassifiedAd.png";
import Image from "../../images/Newspaper.jfif";
import IMage from "../../images/image7.jfif";
import IMAge from "../../images/image6.jfif";
import IMAGE from "../../images/image10.jfif";
import iMage from "../../images/image11.jfif";
import iMAge from "../../images/image9.jfif";
import iMAGe from "../../images/image13.jfif";
import ClassifiedDisplayAd from "../../images/ClassifiedDisplayAd.png";
import BookDisplayAd from "../../images/BookDisplayAd.png";
import Button from "react-bootstrap/Button";
import abt1 from "../../images/about1.jpg";
import abt2 from "../../images/about2.jpg";
import abt3 from "../../images/about3.jpg";
import abt4 from "../../images/about4.jpg";

const About = () => {
  return (
    <div className="">
      <div className="text-white bg-black text-center  py-4">
        <h1 className="text-5xl font-bold">About Us!!</h1>
        <h1 className="text-xl my-1">
          Book Newspaper Advertisement Online at Lowest Rates
        </h1>
      </div>
      <div className="container mx-auto flex flex-col items-center w-screen py-4 ">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <img
                  src={BookClassifiedAd}
                  alt=""
                  style={{ padding: "0px 170px 0px 0px" }}
                />
              </td>
              <td>
                <img
                  src={ClassifiedDisplayAd}
                  alt=""
                  style={{ padding: "0px 170px 0px 0px" }}
                />
              </td>
              <td>
                <img
                  src={BookDisplayAd}
                  alt=""
                  style={{ padding: "0px 170px 0px 0px" }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <h2 className="font-bold">Book Classified Ad</h2>
                <h2>
                  Every Newspaper dedicates a page for publishing Classified
                  Ads. These are low-cost ads that appear in a basic running
                  text style. Charges are based on the number of lines or words.
                  Book Matrimonial, Property, Recruitment and Name Change and
                  other Advertisements.
                </h2>
              </td>
              <td>
                <h2 className="font-bold">Classified Disp</h2>
                <h2>
                  Booking Classified Display Ads in the newspaper, provides an
                  opportunity to customize the look of the ad by adding a logo,
                  images and fonts. These ads cost slightly more than regular
                  text ads, but they are more visible. Classified display ad
                  rates are calculated per square centimeter.
                </h2>
              </td>
              <td>
                <td>
                  <h2 className="font-bold">Book Display Ad</h2>
                  <h2>
                    The term Display Ad refers to ads that show alongside the
                    editorial page of a newspaper. Generally, businesses with
                    larger ad budgets publish this kind of ads due to greater
                    cost. Display Ads offers flexibility to pick any ad size &
                    page of the newspaper, such as the Front, Back or Page.
                  </h2>
                </td>
              </td>
            </tr>
          </tbody>
          <td></td>
        </table>

        <div>
          <div className="pic1"></div>
          <h5>
            <span>
              Our website has become a leading website for the online booking of
              classified, classified Display and Display{" "}
            </span>
            <span className="font-semibold">
              Advertisements in Hindustan Times, Times of India, Tribune,
              Telegraph, Deccan Herald, Hindu, Anandabazar Patrika, Malayala
              Monorama, Gujarat Samachar, Eenadu, Daily Thanthi,Dainik Jagran,
              Amar Ujala, Rajasthan Partika
            </span>
            <span>
              {" "}
              and all other leading <b>Indian newspapers.</b>
            </span>
          </h5>
        </div>
        <br />
        <div>
          <h5>
            Our website is the completely secured and easiest way to{" "}
            <b>
              Book Matrimonial Ad, Property Ad, Recruitment Ad, Education Ad,
              Business Ad, Name change Ad, Public Notice Ad,Films Ad, Movie
              Promotions, Obituary Ad, Remembrance Ad
            </b>
            for any leading newspaper at the cost-effective rates. The good ,
            old Newspaper is certainly the oldest ans is still the largest of
            the major Advertising mediums, and it still place and integral role
            in the media buyer's ad planning. Newspapers were an important and
            respected Advertising medium long before their competitors were even
            thought of. While Newspapers have been replaced as the primary
            medium for "national" Advertising by Television it's local
            orientation has made it well suited to retailers. Newspapers enable
            merchants to reach a wide cross-section of people, by concentrating
            their coverage in the local market.
          </h5>
        </div>
        <div className="pic3">
          <b>
            <h1>
              <center>
                <Button variant="light" className="font-bold text-2xl">Categories</Button>
              </center>
            </h1>
          </b>
          <br />
          <table className="font-bold">
            <tr>
              <td>
                <img
                  src={IMage}
                  alt=""
                  style={{ padding: "0px 170px 0px 0px" }}
                />
                <td>
                  <h4>Movie Advertisements</h4>
                </td>
              </td>
              <td>
                <img
                  src={IMAge}
                  alt=""
                  style={{ padding: "0px 170px 0px 0px" }}
                />
                <td>
                  <h4>Business Advertisements</h4>
                </td>
              </td>
              <td>
                <img
                  src={IMAGE}
                  alt=""
                  style={{ padding: "0px 170px 0px 0px" }}
                />
                <td>
                  <h4>Automobile Advertisements</h4>
                </td>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={iMAge}
                  alt=""
                  style={{ padding: "0px 220px 0px 0px" }}
                />
                <td>
                  <h4>Mobile Advertisements</h4>
                </td>
              </td>
              <td>
                <img
                  src={iMage}
                  alt=""
                  style={{ padding: "0px 260px 0px 0px" }}
                />
                <td>
                  <h4>Fashion Advertisements</h4>
                </td>
              </td>
              <td>
                <img
                  src={iMAGe}
                  alt=""
                  style={{ padding: "0px 170px 0px 0px" }}
                />
                <td>
                  <b>
                    <h4>Jobs Advertisements</h4>
                  </b>
                </td>
              </td>
            </tr>
          </table>
          <table></table>
        </div>
        <div>
          <h2>
            Book Classified Advertisements Online with India's Best Online
            Newspaper Advertisement Booking Website!
          </h2>
          <h5>
            Booking a Classified Ad in a Newspaper is no longer a time-consuming
            task. Through online ad booking service, Ads2Publish.com makes it
            simple for you to get Advertisement in Newspaper published in few
            simple steps. Book Classified and Display advertisements throughout
            India's major newspapers! Advertisements for Matrimonial,
            Recruitment, Property, Rental, Name Change, Business, Service,
            Obituary, Vehicle, Retail, and Travel are available at the most
            affordable prices.
          </h5>
        </div>

        <table className="table text-center">
          <tbody>
            <tr>
              <td>
                <img
                  src={abt1}
                  alt=""
                  style={{ padding: "0px 350px 0px 0px" }}
                />
              </td>
              <td>
                <img
                  src={abt2}
                  alt=""
                  style={{ padding: "0px 350px 0px 0px" }}
                />
              </td>
              <td>
                <img
                  src={abt3}
                  alt=""
                  style={{ padding: "0px 350px 0px 0px" }}
                />
              </td>
              <td>
                <img
                  src={abt4}
                  alt=""
                  style={{ padding: "0px 350px 0px 0px" }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <h5>Book Newspaper Ad in 3 Steps</h5>
              </td>
              <td>
                <h5>Book Classified & Display Ad</h5>
              </td>
              <td>
                <h5>Book for 100+ publications at discounted rates</h5>
              </td>
              <td>
                <h5>
                  Pay via Online & <br /> Offline Payment Options
                </h5>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="">
          <div>
            <h2 className="font-semibold text-xl">
              How to book Newspaper Ads Online:
            </h2>
          </div>
          <ol type="1" className="list-decimal">
            <li>
              To publish an advertisement in a newspaper, just follow the steps
              outlined below.
            </li>
            <li>
              Choose Advertisement Category like Matrimonial, Recruitment,
              Property, Rental, Name Change.
            </li>
            <li>
              Select Newspaper like Times of India, The Hindu, Deccan Chronicle,
              Hindustan Times etc., and choose ad rate from the city list.
            </li>
            <li>Select Date</li>
            <li>
              Compose your Ad referring Ad Samples, Choose enhancement options
              to get higher visibility.
            </li>
            <li>
              Make payment through Credit / Debit Card, Internet Bank or Deposit
              the amount in our bank account to get your ad published in
              Newspaper on desired selected date.
            </li>
          </ol>
        </div>
      </div>
      <div className="bg-black text-white text-center text-xl py-2">
        Copyright 2022 @ Ads2Publish.com <br /> All Rights Reserved.
      </div>
    </div>
  );
};

export default About;
