import React from 'react'

const SettingsTab = ({formData, setFormData, errors}) => {

  const handleChange = e => {
    setFormData({...formData,
        newsletter: e.target.value
    })
  }
  return (
    <div>
        <label>
            Receive Newsletter: <br/>
            <select value={formData.newsletter} onChange={handleChange}>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </label>
        <br/>
        {errors.newsletter && <span style={{ color: "red" }}>{errors.newsletter}</span>}
    </div>
  )
}

export default SettingsTab