import React from 'react'

const ProfileTab = ({formData, setFormData, errors}) => {

  const handleChange = e => {
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    })
  }
  return (
    <div>
        <label>
            Name: <br/>
        <input name="name" type="text" value={formData.name} onChange={handleChange} autoComplete='off'/>
        <br />
        </label>
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        <br /> <br />
        <label>
            Age: <br/>
        <input name="age" type="number" value={formData.age} onChange={handleChange} autoComplete='off'/>
        </label>
        <br/>
        {errors.age && <span style={{ color: "red" }}>{errors.age}</span>}
        <br /> <br />
        <label>
            Email: <br/>
        <input name="email" type="email" value={formData.email} onChange={handleChange} autoComplete='off'/>
        </label>
        <br/>
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        <br /> <br />
    </div>
  )
}

export default ProfileTab