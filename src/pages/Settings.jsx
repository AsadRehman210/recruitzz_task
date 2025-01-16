import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTreatment,
  loadTreatments,
  saveTreatments,
  addTreatment,
} from "../redux/actions/treatmentActions";
import { toast } from "react-toastify";
import close from "../assets/images/close.svg";
import add from "../assets/images/add.svg";

const treat = [
  { id: "injectables", label: "Injectables" },
  { id: "skinImprovement", label: "Skin Improvement" },
  { id: "hairRemoval", label: "Hair Removal" },
  { id: "softSurgery", label: "Soft Surgery" },
  { id: "plasticSurgery", label: "Plastic Surgery" },
];
const setting = ["general", "password", "price", "treatment"];
const Settings = () => {
  const dispatch = useDispatch();
  const treatments = useSelector((state) => state.treatmentState.treatments);
  const [activeComponent, setActiveComponent] = useState("settings");
  const [activeTreatment, setActiveTreatment] = useState("");
  const [currentSelection, setCurrentSelection] = useState("");

  // Load initial data from localStorage
  useEffect(() => {
    const storedTreatments = JSON.parse(localStorage.getItem("treatments"));
    if (storedTreatments) {
      dispatch(loadTreatments(storedTreatments));
    } else {
      const initialTreatments = ["Chemical Peels", "Laser Treatments"];
      dispatch(loadTreatments(initialTreatments));
      localStorage.setItem("treatments", JSON.stringify(initialTreatments));
    }
  }, [dispatch]);

  const handleMenuClick = (component) => {
    setActiveComponent(component);
    setActiveTreatment("");
  };

  const handleTreatmentClick = (treatment) => {
    setActiveTreatment(treatment);
  };

  const handleAddTreatment = () => {
    if (currentSelection) {
      if (!treatments.includes(currentSelection)) {
        dispatch(addTreatment(currentSelection));
        toast.info("Please save the treatment before leaving the page.");
      } else {
        toast.warning("Treatment already added.");
      }
    } else {
      toast.error("Please select a treatment first.");
    }
    setCurrentSelection("");
  };

  const handleRemoveTreatment = (treatment) => {
    dispatch(removeTreatment(treatment));
  };

  const handleSave = () => {
    dispatch(saveTreatments());
    toast.success("Treatments saved successfully!");
  };

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-4 bg-white rounded-t-xl min-h-[calc(100vh-6.75rem)]">
      <h1 className="text-3xl text-[#444753] font-bold mb-4">Settings</h1>
      <div className="flex flex-wrap lg:gap-4">
        <div className="bg-[#F3F6FF] p-1 rounded-2xl max-w-[16.25rem] min-w-[12rem] h-[11rem] mb-4 lg:mb-0">
          <ul className="space-y-2">
            {setting.map((item) => (
              <li key={item}>
                <button
                  className={`w-full text-left py-2 px-4 text-sm font-medium rounded-xl ${
                    activeComponent === item
                      ? "bg-white text-[#6968EC]"
                      : "text-[#71788E]"
                  }`}
                  onClick={() => handleMenuClick(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {activeComponent === "treatment" && (
          <div className="p-4 rounded-lg max-w-[18.813rem] min-w-[14rem]">
            <h1 className="text-xl font-bold mb-4 text-[#3E4147]">
              Treatments
            </h1>
            <ul className="space-y-2">
              {treat.map((treatment) => (
                <li key={treatment.id}>
                  <button
                    className={`w-full text-left px-4 py-2 text-sm font-medium rounded-xl ${
                      activeTreatment === treatment.id
                        ? "bg-[#F2F5FF] text-[#6968EC]"
                        : "text-[#71788E]"
                    }`}
                    onClick={() => handleTreatmentClick(treatment.id)}
                  >
                    {treatment.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTreatment === "skinImprovement" && (
          <div className="bg-[#F9FAFF] py-4 px-2 rounded-2xl w-full mt-0 md:mt-14 lg:w-[43.938rem] min-w-[17rem] md:min-w-[28rem] flex flex-col gap-[0.563rem] flex-1">
            <div className="px-4 flex flex-col gap-[0.563rem]">
              <h1 className="text-[0.938rem] font-semibold text-[#3E4147]">
                Skin Improvement({treatments.length})
              </h1>
              <p className="font-medium text-[0.688rem] text-[#AEB2BF]">
                Treatments
              </p>
            </div>
            <ul className="border border-[#DADAFC] bg-[#FFFFFF] rounded-xl divide-y divide-[#DADAFC]">
              {treatments.map((treatment, index) => (
                <li key={index} className="flex justify-between">
                  <p className="text-[#585C6A] text-xs px-4 py-4">
                    {treatment}
                  </p>
                  <button
                    className="px-5 border-l border-[#DADAFC]"
                    onClick={() => handleRemoveTreatment(treatment)}
                  >
                    <img src={close} alt="close" className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4 mt-4">
              <div className="relative w-full">
                <select
                  value={currentSelection}
                  onChange={(e) => setCurrentSelection(e.target.value)}
                  className="appearance-none border p-2 rounded-xl text-[#71788E] text-sm bg-white border-[#DADAFC] w-full focus:outline-none focus:border-[#6968EC]"
                >
                  <option value="">Select Treatment...</option>
                  <option value="Chemical Peels">Chemical Peels</option>
                  <option value="Microdermabrasion">Microdermabrasion</option>
                  <option value="Laser Treatments">Laser Treatments</option>
                  <option value="Light Therapies">Light Therapies</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#AEB2BF"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9.75l3.75 3.75 3.75-3.75"
                    />
                  </svg>
                </div>
              </div>

              <button
                className="w-12 h-12 px-4 py-2 bg-white text-white border-2 border-[#E4E4F8] rounded-xl"
                onClick={handleAddTreatment}
              >
                <img src={add} alt="add" className="w-6 h-6" />
              </button>
            </div>

            <div className="flex gap-2 mt-4 w-full">
              <button
                className="px-4 py-2 bg-white text-[#6968EC] border-2 border-[#E4E4F8] text-sm rounded-xl w-full"
                onClick={() => handleMenuClick("treatment")}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[#6968EC] text-white border-2 border-[#6968EC] text-sm rounded-xl w-full"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Settings;
