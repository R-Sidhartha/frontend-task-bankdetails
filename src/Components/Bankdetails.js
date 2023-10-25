import React, { useEffect, useState } from "react";
import VerticalNav from "./VerticalNav";

const Bankdetails = ({isMobileView}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] =useState({
        name: '',
        accountnumber: '',
        ifsccode: '',
        bankname: '',
        bankcity: '',
        branchname: '',
        relation: '',
        consent: '',
      });

  const toggleEditMode = (e) => {
    e.preventDefault();
    setIsEditMode(!isEditMode);
  };

  const handleSave = (e) => {
    e.preventDefault();
    toggleEditMode(e);
  };
  useEffect(() => {
    const savedFormData = localStorage.getItem("bankdetails");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleInputChange = (e) => {
    if (isEditMode) {
      const { name, value } = e.target;
      const updatedFormData = { ...formData, [name]: value };
      setFormData(updatedFormData);

      // Save the updated form data to localStorage
      localStorage.setItem("bankdetails", JSON.stringify(updatedFormData));
    }
  };
 
  return (
    <>
      <div className="flex">
        <VerticalNav />
        <div className={`details mx-3 flex justify-center ${isMobileView ? 'w-screen':'w-3/4'}`}>
          <div className={`flex  justify-center h-screen container ${isMobileView ? 'w-full':'w-3/5'}`}>
            <div className="flex flex-col rounded-lg">
              <div className="mt-10">
                <h1 className="font-bold text-4xl">Update Bank Details</h1>
                <p className="font-semibold my-3">
                  Secure Banking Details: Safeguarding Your Financial
                  Information for a Brighter Financial Future.
                </p>
              </div>
              <form className="my-3 ">
                <div className="mb-4 flex">
                  <label className=" mb-2 text-sm text-black flex items-center w-1/2">
                    ACCOUNT HOLDER NAME:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-4 py-2 text-gray-600  rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-cyan-500 ${!isEditMode ? 'bg-green-200' : 'bg-white'}`}
                    required
                    value={ formData.name}
                    readOnly={!isEditMode}
                    onChange={handleInputChange}

                  />
                </div>
                <div className="mb-4 flex">
                  <label className=" mb-2 text-sm  flex items-center w-1/2">
                    ACCOUNT NUMBER:
                  </label>
                  <input
                    type="text"
                    id="accountnumber"
                    name="accountnumber"
                    className={`w-full text-gray-600 border border-black px-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${!isEditMode ? 'bg-green-200' : 'bg-white'}`}
                    required
                    value={formData.accountnumber}
                    readOnly={!isEditMode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4 flex">
                  <label className=" mb-2 text-sm  flex items-center w-1/2">
                    IFSC CODE:
                  </label>
                  <input
                    type="text"
                    id="ifsccode"
                    name="ifsccode"
                    className={`w-full text-gray-600  border-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${!isEditMode ? 'bg-green-200' : 'bg-white'}`}
                    required
                    value={formData.ifsccode}
                    readOnly={!isEditMode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4 flex">
                  <label className=" mb-2 text-sm  flex items-center w-1/2">
                    BANK NAME:
                  </label>
                  <input
                    type="text"
                    id="bankname"
                    name="bankname"
                    className={`w-full text-gray-600  border-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${!isEditMode ? 'bg-green-200' : 'bg-white'}`}
                    required
                    value={formData.bankname}
                    readOnly={!isEditMode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4 flex">
                  <label className=" mb-2 text-sm  flex items-center w-1/2">
                    BANK CITY:
                  </label>
                  <input
                    type="text"
                    id="bankcity"
                    name="bankcity"
                    className={`w-full text-gray-600 px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${!isEditMode ? 'bg-green-200' : 'bg-white'}`}
                    required
                    value={formData.bankcity}
                    readOnly={!isEditMode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4 flex">
                  <label className=" mb-2 text-sm  flex items-center w-1/2">
                    BRANCH NAME:
                  </label>
                  <input
                    type="text"
                    id="branchname"
                    name="branchname"
                    className={`w-full text-gray-600 px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500  ${!isEditMode ? 'bg-green-200' : 'bg-white'}`}
                    required
                    value={formData.branchname}
                    readOnly={!isEditMode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4 flex">
                  <label
                    for="relation"
                    className=" mb-2  text-sm  flex items-center w-1/2"
                  >
                    RELATION WITH ACCOUNT HOLDER:
                  </label>
                  <input
                    type="text"
                    id="relation"
                    name="relation"
                    className={`w-full text-gray-600 px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500  ${!isEditMode ? 'bg-green-200' : 'bg-white'}`}
                    required
                    value={formData.relation}
                    readOnly={!isEditMode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-6 flex align-middle">
                  <label
                    for="consent"
                    className=" mb-2 text-sm  flex items-center w-1/2"
                  >
                    CONSENT:
                  </label>
                  <input
                    type="text"
                    id="consent"
                    name="consent"
                    className={`w-full text-gray-600 px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${!isEditMode ? 'bg-green-200' : 'bg-white'}`}
                    required
                    value={formData.consent}
                    readOnly={!isEditMode}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="button"
                  className="w-32 float-right bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
                  onClick={(e) =>
                    isEditMode ? handleSave(e) : toggleEditMode(e)
                  }
                >
                  {" "}
                  {isEditMode ? "Save" : "Edit"}
                </button>
              </form>
              <div className="msg w-full">
                <p className="text-sm">THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENTS, IF ANY OF THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM! </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bankdetails;
