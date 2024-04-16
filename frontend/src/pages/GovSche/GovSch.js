import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
// import React, { useState } from "react";
import ErrorImage from "../../components/img/error.png";
import "../../App.css";

const GovSchem = () => {
  // const [number, setNumber] = useState("");
  // const [log, setLog] = useState("");
  // const [load, setLoad] = useState(true);
  // const [lang, setLang] = useState("en");

  // async function onSearchSubmit(term) {
  //   setLoad(false);
  //   console.log("Clicked");
  //   let url =
  //     "http://127.0.0.1:4000/find_response" + lang + "/+917317208534/" + log;

  //   let value = await fetch(url, {
  //     method: "get"
  //   });

  //   setLoad(false);
  //   console.log(value);
  // }

  return (
    <>
      <PreHeader />
      <Header />
      <section className="fullpage-container">
        <div className="fullpage-image">
          {/* Your error image */}
          <img src={ErrorImage} alt="error" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GovSchem;
