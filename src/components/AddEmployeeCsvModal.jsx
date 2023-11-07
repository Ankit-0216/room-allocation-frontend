import React, { useState } from "react";

const AddEmployeeCsvModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-blue-500 text-white active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:bg-blue-700 outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Employee By CSV
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t ">
                  <h3 className="text-3xl font=semibold">UPLOAD FILE</h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-2 text-black font-bold mb-3"
                      type="file"
                    />
                    <label className="block text-black text-sm">
                      * file type should be .csv
                    </label>
                    <label className="block text-black text-sm">
                      * file size should be less than 20 mb
                    </label>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-3 mb-1 hover:bg-red-200" 
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 hover:bg-blue-200"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AddEmployeeCsvModal;