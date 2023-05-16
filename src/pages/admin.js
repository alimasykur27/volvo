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
      contentData
    },
  };
}

export default function Admin({ contentData }) {
  const [modelUnit, setModelUnit] = useState(contentData.dashboard.modelUnit);
  const [siteUnit, setSiteUnit] = useState(contentData.dashboard.siteUnit);
  const [statusUnit, setStatusUnit] = useState(contentData.dashboard.statusUnit);
  const [actualPa, setActualPa] = useState(contentData.dashboard.actualPa);
  const [paretoImages, setParetoImages] = useState(contentData.paretoImages);

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [waNumber, setWaNumber] = useState(contentData.misc.waNumber);

  const updateContentData = (newContentData, successMsg, reloadAfter) => {
    fetch('/api/updateContent', {
      method: 'POST',
      body: JSON.stringify({ contentData: newContentData }),
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => {
      if (res.redirected) {
        window.location = res.url;
      } else if (res.status == 200) {
        if (reloadAfter)
          location.reload()
        if (successMsg)
          alert(successMsg)
      } else {
        const { message } = res.json()
        if (message)
          alert(message)
      }
      return
    })
  }

  const uploadParetoImage = (formData, successMsg) => {
    fetch('/api/paretoUpload', {
      method: 'POST',
      body: formData
    }).then(res => {
      if (res.redirected) {
        window.location = res.url;
      } else if (res.status == 200) {
        window.reload()
        if (successMsg)
          alert(successMsg)
      } else {
        const { message } = res.json()
        if (message)
          alert(message)
      }
      return
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContentData = {
      ...contentData,
      dashboard: {
        modelUnit,
        siteUnit,
        statusUnit,
        actualPa,
      },
    };
    updateContentData(newContentData, 'Data updated successfully!', true)
  }

  const handleWaNumberChange = (newValue) => {
    newValue = newValue.replace(/\D+/g, '')
    setWaNumber(newValue)
  }

  const handleSendNotification = () => {
    if (message === "" || type === "" || waNumber === '') {
      alert("Please fill all the fields!");
      return
    }
    if (waNumber !== contentData.misc.waNumber) {
      const newContentData = {
        ...contentData,
        misc: {
          waNumber
        },
      }
      updateContentData(newContentData)
    }
    window.open(`https://wa.me/${waNumber}/?` + new URLSearchParams({ text: `[${type.toUpperCase()}]\n${message}`}))
    alert('Redirecting to https://wa.me in a new tab')
  }

  const previewImage = (event, imageKey) => {
    console.log('debug')
    const file = event.target.files[0]
    if (file) {
      const imgUrl = URL.createObjectURL(file)
      setParetoImages((p) => { p[imageKey] = imgUrl; return p; })
      document.getElementById(imageKey).src = imgUrl
    }
  }

  const handleUpdateImage = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    uploadParetoImage(formData, 'Pareto image updated successfully!')
    // for (const imageKey of formData.keys()) {
    //   if (formData.get(imageKey).size > 0 && formData.get(imageKey).name !== '') {
    //     console.log(formData.get(imageKey))
    //   }
    // }
  }

  const getLastLetter = (str) => {
    return str.charAt(str.length - 1);
  }

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
                  {contentData.serviceType.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Whatsapp Number:
                </label>
                <input
                  type="text"
                  placeholder="Whatsapp Number"
                  value={waNumber}
                  onChange={(e) => handleWaNumberChange(e.target.value)}
                  className="w-full border border-gray-400 p-2 rounded-md"
                />
              </div>
              <button 
                type="button" 
                onClick={handleSendNotification}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >Send Notification</button>
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
            <form onSubmit={(event) => handleUpdateImage(event)} className="bg-white rounded-lg p-8">
              {Object.keys(paretoImages).map((imageKey) => (
                <div className="mb-4" key={imageKey}>
                  <label className="block text-gray-700 font-bold mb-2">
                    Pareto {getLastLetter(imageKey)}:
                  </label>
                  <div>
                    <img src={paretoImages[imageKey]} id={imageKey} alt={`Image ${imageKey}`} className={`mb-4 max-w-5xl ${(paretoImages[imageKey]) ? '' : 'hidden'} `}/>
                    <input
                      type="file"
                      name={imageKey}
                      accept="image/*"
                      className="border border-gray-400 p-2 rounded-md"
                      onChange={(event) => previewImage(event, imageKey)}
                    />
                  </div>
                </div>
              ))}
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
               Update Image
              </button>
            </form>
          </div>
        </div>
      </div>
    </Auth>
  )
}