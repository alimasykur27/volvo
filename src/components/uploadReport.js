import React, { useRef } from 'react';

const UploadReport = () => {
  const fileInputRef = useRef(null);

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // TODO: Handle the file upload logic here
    console.log('Selected file:', file);
    alert("coming soon");
  };

  return (
    <div className="mx-auto flex flex-col py-2">
      <button
        className="w-[50%] px-6 py-2 mx-auto border-2 border-gray-800 rounded-full text-center text-gray-800 hover:bg-gray-800 hover:text-white font-medium tracking-widest"
        onClick={handleUpload}
      >
        UPLOAD
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadReport;