import React from 'react'

const hobbyOptions = ['Badminton', 'Cricket', 'Chess', 'Football', 'Hockey', 'Table Tennis'];
const languages = ['C++', 'JavaScript', 'Python', 'Java'];

const InterestTab = ({formData, setFormData, errors}) => {

  const handleHobbyChange = e => {
    const {value, checked} = e.target
    let hobbies = [...formData.hobbies]
    if(checked){
        hobbies.push(value);
    }
    else{
        hobbies = hobbies.filter((hobby) => hobby!==value)
    }
    setFormData({...formData,
        hobbies
    })
  }

  const handleLanguageChange = e => {
    setFormData({...formData,
        language: e.target.value
    })
  }
  return (
    <div>
        <span>Hobbies</span>
        <br /> <br />
        {hobbyOptions.map((hobby) => (
            <label key={hobby} style={{marginRight:'16px'}}>
            <input type="checkbox" value={hobby} checked={formData.hobbies.includes(hobby)} onChange={handleHobbyChange} />
            {hobby}
            </label>
         ))}
         <br/>
         {errors.hobbies && <span style={{ color: "red" }}>{errors.hobbies}</span>}
         <br /> <br />
        <span>Preferred Language</span>
        <br /> <br />
        {languages.map((lang) => (
            <label key={lang} style={{marginRight:'16px'}}>
            <input type="radio" name="language" value={lang} checked={formData.language === lang} onChange={handleLanguageChange} />
            {lang}
            </label>
         ))}
         <br/>
         {errors.language && <span style={{ color: "red" }}>{errors.language}</span>}
    </div>
  )
}

export default InterestTab