import React, { useState } from "react";
import ProfileTab from "./ProfileTab";
import InterestTab from "./InterestTab";
import SettingsTab from "./SettingsTab";

const tabConfig = [
  {
    label: "Profile",
    component: ProfileTab,
  },
  {
    label: "Interests",
    component: InterestTab,
  },
  {
    label: "Settings",
    component: SettingsTab,
  },
];

const TabForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    hobbies: [],
    language: "",
    newsletter: "",
  });
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({})
  const ActiveComponent = tabConfig[activeTab].component

  const validateField = (fieldName, value) => {
    switch(fieldName) {
        case "name":
            if(!value.trim()) return "Name is required";
            break;
        case "email":
            if(!value.trim()) return "Email is required";
            break;
        case "age":
            if(isNaN(value)) return "age is required"
            if(Number(value)<=0) return "age should be a positive number"
            break;
        case "hobbies":
            if(!value.length) return "Please select at least one hobby"
            break;
        case "language":
            if(!value.trim()) return "Please select language"
            break;
        case "newsletter":
            if(!value) return "Please select newsletter preference"
            break;
        default:
            return ""
    }
  }

  const validate = () => {
    const fields = ["name", "age", "email", "hobbies", "language", "newsletter"]
    const newErrors = {}
    fields.forEach((field) => {
        const error = validateField(field, formData[field]);
        if(error){
            newErrors[field] = error; 
        }
    })
    setErrors(newErrors)
    return Object.keys(errors).length === 0;
  }
  const handleSubmit = () => {
    if(validate()){
        alert("Form submitted successfully \n" + JSON.stringify(formData,null, 2))
    }
    else{
        alert("Please fix errors before submitting")
    }
  }

  const validateCurrentTab = () => {
    const newErrors = {}
    console.log('active tab', activeTab);

    if(activeTab === 0){
        console.log('inside 0');
        ["name", "age", "email"].forEach((field)=> {
            const error = validateField(field, formData[field])
            if(error){
                newErrors[field] = error;
            }
        })
    }
    else if(activeTab === 1){
        console.log('inside 1');
        ["hobbies", "language"].forEach((field) => {
            const error = validateField(field, formData[field]);
            if(error){
                newErrors[field] = error;
            }
        })
    }
    else if(activeTab === 2){
        const error = validateField("newsletter", formData["newsletter"]);
        if(error){
            newErrors["newsletter"] = error;
        }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    const isValid = validateCurrentTab()
    if(isValid){
        setActiveTab(activeTab + 1)
    }
    else{
        alert("Please fix errors before moving to next tab")
    }
  }
  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        {tabConfig.map((tab, idx) => (
          <button
            key={tab.label}
            style={{ fontWeight: idx === activeTab ? "bold" : "normal" }}
            onClick={() => setActiveTab(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "24px" }}>
        <ActiveComponent
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      </div>
      {activeTab < tabConfig.length - 1 && 
      <button onClick = {handleNext}> Next</button>}
      {activeTab === tabConfig.length - 1 && (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default TabForm;
