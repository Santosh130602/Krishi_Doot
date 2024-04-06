import Header from "../../components/Header/Header";
import PreHeader from "../../components/preheader/preheader";
import Footer from "../../components/Footer/footer";
import { useState } from "react";

const Appoinment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("")
  const [time, setTime] = useState("");




  const handleBookSlot = () => {
    // Create an object with the user data
    const userData = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      date: date,
      time: time,
    };
  
    // Send a POST request to the backend
    fetch('http://localhost:8000/api/v1/appoinment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => {
        if (response.ok) {
          console.log('Appointment booked successfully!');
          // Reset form fields after successful booking
          setName('');
          setEmail('');
          setPhoneNumber('');
          setDate('');
          setTime('');
          // Show success message
          alert('Appointment booked successfully!');
        } else {
          // Show error message
          console.error('Failed to book appointment');
          alert('Failed to book appointment. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error occurred while booking appointment:', error);
        // Show error message
        alert('Error occurred while booking appointment. Please try again.');
      });
  };
  
  

  return (
    <>
      <PreHeader />
      <Header />
      <section className="">
        <div className="grid place-items-center my-14">
          <div className="container bg-gray-100 p-10 grid place-items-center mt-14  ">
            <p className="text-2xl font-medium text-green-600 my-12">
              Book Slot in Mandi
              <br />
            </p>

            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              className="w-3/5 my-2 required"
              type="text"
              placeholder="Enter your name"
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="w-3/5 my-2 required"
              type="text"
              placeholder="Enter your email"
            />
            <input
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              value={phoneNumber}
              className="w-3/5 my-2 required"
              type="text"
              placeholder="Enter Phone Number"
            />
            <div className="flex gap-20">
              <input
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                className="w-3/5 my-2 required"
                type="date"  // Change type to date
                placeholder="Enter the Date"
              />

              {/* <input
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                value={time}
                className="w-3/5 my-2 required "
                type="time"
                placeholder="Enter the Time"
              /> */}
              <input
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                value={time}
                className="w-3/5 my-2 required"
                type="time"
                placeholder="Enter the Time"
                min="00:00:00"
                max="24:00:00"
                step="2"
              />




            </div>
            <div className="grid place-items-center mt-14 ">
              <div className="mt-2">
                <button
                  onClick={handleBookSlot}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-[#213c96] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Book Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Appoinment;







