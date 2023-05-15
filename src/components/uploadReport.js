import React, { useRef } from 'react';

const UploadReport = ({ fileName }) => {
  const fileInputRef = useRef(null);

  const uploadToDrive = (formData, successMsg) => {
    fetch('/api/driveUpload', {
      method: 'POST',
      body: formData
    }).then(res => {
      if (res.redirected) {
        window.location = res.url;
      } else if (res.status == 200) {
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

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event, fileName) => {
    const file = event.target.files[0];
    if (!file)
      return
    const formData = new FormData()
    formData.append('pdf_file', file, fileName)
    uploadToDrive(formData, 'Report file uploaded to drive successfully')
  };

  return (
    <div className="mx-auto flex flex-col py-2">
      <button
        className="w-[50%] px-6 py-2 mx-auto border-2 border-gray-800 rounded-full text-center text-gray-800 hover:bg-gray-800 hover:text-white font-medium tracking-widest"
        onClick={(event) => handleUpload()}
      >
        UPLOAD REPORT
      </button>
      <input
        type='file'
        accept='application/pdf'
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(event) => handleFileChange(event, fileName)}
      />
    </div>
  );
};

export default UploadReport;