import Head from "next/head";
import Navbar from "@/components/navbar";
import { GrServices } from "react-icons/gr";
import { IoNotifications } from "react-icons/io5";
import Auth from "@/components/auth";
import { getJson } from "@/lib/contentData";
import { useState } from "react";

export async function getStaticProps() {
  let contentData = getJson();
  return {
    props: {
      dashboard: contentData.dashboard,
      serviceTypeList: contentData.serviceType,
      paretoImages: contentData.paretoImages
    },
  };
}

export default function Admin({ dashboard, serviceTypeList, paretoImages }) {
  const [modelUnit, setModelUnit] = useState(dashboard.modelUnit);
  const [siteUnit, setSiteUnit] = useState(dashboard.siteUnit);
  const [statusUnit, setStatusUnit] = useState(dashboard.statusUnit);
  const [actualPa, setActualPa] = useState(dashboard.actualPa);

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const [images, setImages] = useState(paretoImages);

  // TODO: create a function to update content data
  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = {
      dashboard: {
        modelUnit,
        siteUnit,
        statusUnit,
        actualPa,
      },
    };
    // saveJson(newData); // save the updated data to the JSON file
    alert("Data updated successfully!");
  };

  // TODO: create a function to update wa number
  // TODO: send notification to all wa number
  const handleSendNotification = () => {
    if (message === "" || type === "") {
      alert("Please fill all the fields!");
    } else {
      alert("Notification sent successfully!");
    }
  };

  // TODO: create a function to update pareto image
  const handleUpdateImage = (event) => {
    alert("Image updated successfully!");
  }

  const getLastLetter = (str) => {
    return str.charAt(str.length - 1);
  };

  return (
    <Auth>
      <Head>
        <title>Admin | Volvo Monitoring ADT A40G</title>
        <meta name="description" content="Deskripsi halaman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/css/output.css" rel="stylesheet" />
      </Head>
      <div className="w-full min-h-screen flex flex-col bg-gray-200">
        <Navbar />
        <div className='flex-1 ml-56 mt-1'>
          <div className="mx-auto px-4 py-4">
            <h1 className="text-3xl font-bold mb-4">
              <IoNotifications className="inline-block mr-2"/> Notifications
            </h1>
            <form className="bg-white rounded-lg p-8">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Message:
                </label>
                <input
                  type="text"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-400 p-2 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Type:
                </label>
                <select 
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-[25%] border border-gray-400 p-2 rounded-md"
                >
                  <option value="">Select type</option>
                  {serviceTypeList.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <button 
                type="button" 
                onClick={handleSendNotification}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >Send</button>
            </form>
          </div>

          <div className="mx-auto px-4 py-4">
            <h1 className="text-3xl font-bold mb-4">
              <GrServices className="inline-block mr-2"/> Edit Content Data
            </h1>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Model Unit:
                </label>
                <input
                  type="text"
                  value={modelUnit}
                  onChange={(e) => setModelUnit(e.target.value)}
                  className="w-full border border-gray-400 p-2 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Site Unit:
                </label>
                <input
                  type="text"
                  value={siteUnit}
                  onChange={(e) => setSiteUnit(e.target.value)}
                  className="w-full border border-gray-400 p-2 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Status Unit:
                </label>
                <input
                  type="text"
                  value={statusUnit}
                  onChange={(e) => setStatusUnit(e.target.value)}
                  className="w-full border border-gray-400 p-2 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Actual Pa:
                </label>
                <input
                  type="text"
                  value={actualPa}
                  onChange={(e) => setActualPa(e.target.value)}
                  className="w-full border border-gray-400 p-2 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
               Update Data
              </button>
            </form>
          </div>

          <div className="mx-auto px-4 py-4">
            <h1 className="text-3xl font-bold mb-4">
              <GrServices className="inline-block mr-2"/> Edit Image
            </h1>
            <div className="bg-white rounded-lg p-8">
              {Object.keys(images).map((imageKey) => (
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Pareto {getLastLetter(imageKey)}:
                  </label>
                  <div key={imageKey}>
                    <img src={images[imageKey]} alt={`Image ${imageKey}`} className="mb-4 max-w-5xl"/>
                    <input
                      type="file"
                      accept="image/*"
                      className="border border-gray-400 p-2 rounded-md"
                      onChange={(event) => handleUpdateImage(imageKey, event)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Auth>
  );
}