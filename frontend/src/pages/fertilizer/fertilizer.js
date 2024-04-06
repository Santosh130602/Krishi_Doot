


import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import React, { useState,useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
let alanKey = "2929637674a720da423ab91d9237489a2e956eca572e1d8b807a3e2338fdd0dc/stage";


const Fertilizer = () => {
  const [load, setLoad] = useState(false);
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [moisture, setMoisture] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [soilType, setSoilType] = useState("");
  const [cropType, setCropType] = useState("");
  const [city, setCity] = useState("");
  const [prediction, setPrediction] = useState("");
  const [lang, setLang] = useState("en");

  function onSearchSubmit() {
    setLoad(true);

    // Prepare data to send to the backend
    const data = {
      Temperature: parseFloat(temperature),
      Humidity: parseFloat(humidity),
      Moisture: parseFloat(moisture),
      Nitrogen: parseFloat(nitrogen),
      Phosphorous: parseFloat(phosphorus),
      Potassium: parseFloat(potassium), // Fixed typo in key name
      Soil_Type: soilType,
      Crop_Type: cropType,
      city: city,
      lang: lang
    };

    // Send POST request to backend
    fetch("http://127.0.0.1:4000/fertilizer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        // Handle successful response
        setPrediction(data.recommendation);
      })
      .catch(error => {
        // Handle errors
        console.error("Error:", error);
      })
      .finally(() => {
        // Reset loading state
        setLoad(false);
      });
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
        <div className="grid place-items-center my-14  ">
          <div className="container bg-gray-100 p-10 grid place-items-center mt-14  ">
            <p className="text-2xl font-medium text-green-600 my-12">
              Good Fertilizer for your crop
              <br />
            </p>

            <div className="flex flex-row space-x-3 my-10">
              <div>Please select a Language, default language English</div>
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
              <div className="ml-16 ">
                <button
                  onClick={() => setLang("es")}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-[#213c96] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Spanish
                </button>
              </div>
            </div>




            {/* Input fields for environmental and soil data */}


            <div className="flex flex-row my-2 w-3/5">
              <div>Select a Soil Type</div>
              <div className="ml-16 ">
                <select
                  onChange={(e) => setSoilType(e.target.value)}
                  className="border-2 border-green-600 p-2 rounded-sm w-64"
                >
                  <option value="Clayey">Clayey</option>
                  <option value="Loamy">Loamy</option>
                  <option value="Sandy">Sandy</option>
                  <option value="Red">Red</option>
                  <option value="Black">Black</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row my-2 w-3/5">
              <div>Select a Crop Type</div>
              <div className="ml-16 ">
                <select
                  onChange={(e) => setCropType(e.target.value)}
                  className="border-2 border-green-600 p-2 rounded-sm w-64"
                >
                  <option value="Wheat">Wheat</option>
                  <option value="Ground Nuts">Groundnut</option>
                  <option value="Sugarcane">Sugarcane</option>
                  <option value="Maize">Maize</option>
                  <option value="Barley">Barley</option>
                  <option value="Tobacco">Tobacco</option>
                  <option value="Cotton">Cotton</option>
                  <option value="Oil seeds">Oilseed</option>
                  <option value="Paddy">Paddy</option>
                  <option value="Pulses">Pulses</option>
                  <option value="Millets">Millets</option>
                </select>
              </div>
            </div>




            <input
              onChange={(e) => setTemperature(e.target.value)}
              className="w-3/5 my-2"
              type="text"
              placeholder="Temperature value"
            />

            <input
              onChange={(e) => setHumidity(e.target.value)}
              className="w-3/5 my-2"
              type="text"
              placeholder="Humidity value"
            />

            <input
              onChange={(e) => setMoisture(e.target.value)}
              className="w-3/5 my-2"
              type="text"
              placeholder="Moisture value"
            />



            {/* Input fields for fertilizer components */}
            <input
              onChange={(e) => setNitrogen(e.target.value)}
              className="w-3/5 my-2"
              type="text"
              placeholder="Nitrogen value"
            />

            <input
              onChange={(e) => setPotassium(e.target.value)}
              className="w-3/5 my-2"
              type="text"
              placeholder="Potassium value"
            />

            <input
              onChange={(e) => setPhosphorus(e.target.value)}
              className="w-3/5 my-2"
              type="text"
              placeholder="Phosphorous value"
            />

            {/* Button to submit the form */}
            <div className="grid place-items-center mt-14 ">
              <div className="mt-2">
                <button
                  onClick={() => onSearchSubmit()}
                  type="button"
                  className="inline-block  px-6 py-2.5 bg-[#213c96] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Fertilizer Recommendation
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Display loading message */}
          {load ? (
            <div className="grid place-items-center my-14  ">Loading...</div>
          ) : null}
          {/* Display prediction if available */}
          {prediction !== "" ? (
            <div className="grid place-items-center my-14 text-center ">
              <p className="font-bold my-3">Fertilizer Predicted: </p>
              {prediction}
            </div>
          ) : null}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Fertilizer;


