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
      contentData: contentData.dashboard,
      serviceTypeList: contentData.serviceType
    },
  };
}

export default function Admin({ contentData, serviceTypeList }) {
  const [modelUnit, setModelUnit] = useState(contentData.modelUnit);
  const [siteUnit, setSiteUnit] = useState(contentData.siteUnit);
  const [statusUnit, setStatusUnit] = useState(contentData.statusUnit);
  const [actualPa, setActualPa] = useState(contentData.actualPa);

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

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

  const handleSendNotification = () => {
    if (message === "" || type === "") {
      alert("Please fill all the fields!");
    } else {
      alert("Notification sent successfully!");
    }
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
          <div className="mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">
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
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Type:
                </label>
                <select 
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Select type</option>
                  {serviceTypeList.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <button type="button" onClick={handleSendNotification}>Send</button>
            </form>
          </div>

          <div className="mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">
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
        </div>
      </div>
    </Auth>
  );
}