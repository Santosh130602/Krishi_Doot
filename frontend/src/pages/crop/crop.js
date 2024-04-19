import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import React, { useState,useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
let alanKey = "2929637674a720da423ab91d9237489a2e956eca572e1d8b807a3e2338fdd0dc/stage";


const Crop = () => {
  const [load, setLoad] = useState(false);
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [ph, setPh] = useState("");
  const [rain, setRain] = useState("");
  const [prediction, setPrediction] = useState("");
  const [lang, setLang] = useState("en");

  function onSearchSubmit() {
    setLoad(true);
    let url = 'https://krishi-ml.onrender.com/predict'
    let body = JSON.stringify({
      N: parseFloat(nitrogen),
      P: parseFloat(phosphorus),
      K: parseFloat(potassium),
      temperature: parseFloat(temperature),
      humidity: parseFloat(humidity),
      ph: parseFloat(ph),
      rainfall: parseFloat(rain),
      lang: lang
    });

    try {
      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: body
      })
        .then((response) => response.json())
        .then((data) => {
          setPrediction(data.predicted_crop); // Assuming the response contains 'predicted_crop' field
        })
        .catch((error) => {
          console.log(error);
        });
    } 
    catch (e) {
      console.log(e);
    }

    setLoad(false);
  }
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command.includes("showweather")) {
          console.log("testCommand");
          alert("This is a Alan AI demo");
        }
      }
    });
  }, []);

  return (
    <>
      <PreHeader />
      <Header />
      <section className="">
        <div className="grid place-items-center my-14">
          <div className="container bg-gray-100 p-10 grid place-items-center mt-14  ">
            <p className="text-2xl font-medium text-green-600 my-12">
              Predict the best crop to plant
              <br />
            </p>
            <div className="flex flex-row space-x-3 my-10">
              <div>Please select a Language, default language is English</div>
              <div className="ml-16 ">
                <button
                  onClick={() => setLang("en")}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-[#213c96] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  English
                </button>
              </div>
              <div className="ml-16">
                <button
                  onClick={() => setLang("hi")}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-[#213c96] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Hindi
                </button>
                
              </div>
            </div>
            <input
              onChange={(e) => {
                setNitrogen(e.target.value);
              }}
              className="w-3/5 my-2 required"
              type="text"
              placeholder="Enter the value of Nitrogen"
            />
            <input
              onChange={(e) => {
                setPhosphorus(e.target.value);
              }}
              className="w-3/5 my-2 required"
              type="text"
              placeholder="Enter the value of Phosphorus"
            />
            <input
              onChange={(e) => {
                setPotassium(e.target.value);
              }}
              className="w-3/5 my-2 required"
              type="text"
              placeholder="Enter the value of Potassium"
            />
            <input
              onChange={(e) => {
                setTemperature(e.target.value);
              }}
              className="w-3/5 my-2 required"
              type="text"
              placeholder="Enter the Temperature"
            />
            <input
              onChange={(e) => {
                setHumidity(e.target.value);
              }}
              className="w-3/5 my-2 required"
              type="text"
              placeholder="Enter the Humidity"
            />
            <input
              onChange={(e) => {
                setPh(e.target.value);
              }}
              className="w-3/5 my-2 required"
              type="text"
              placeholder="Enter the soil ph value (0-14)"
            />
            <input
              onChange={(e) => {
                setRain(e.target.value);
              }}
              className="w-3/5 my-2 required"
              type="text"
              placeholder="Enter the rainfall gauge (in mm)"
            />
            <div className="grid place-items-center mt-14 ">
              <div className="mt-2">
                <button
                  onClick={onSearchSubmit}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-[#213c96] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Get Crop Recommendation
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          {load ? (
            <div className="grid place-items-center my-14  ">loading </div>
          ) : null}
          {prediction !== "" ? (
            <div className="grid place-items-center my-14 text-center ">
              <p className="font-bold my-3">Crop Predicted: </p>
              {prediction}
            </div>
          ) : null}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Crop;


