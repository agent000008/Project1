import { Form } from 'antd';
import React, { useState } from 'react';

const Dorm = () => {
const [isVisible, setIsVisible] = useState(false);
const [formData, setFormData] = useState({
name: '',
age: '',
city: ''
});

const handleButtonClick = () => {
setIsVisible(true);
}

const handleCancelClick = () => {
setIsVisible(false);
}

const handleFormChange = (e) => {
const { name, value } = e.target;
setFormData({...formData, [name]: value});
}

const handleSelectChange = (e) => {
setFormData({...formData, city: e.target.value});
}

return (
<div>
<button onClick={handleButtonClick}>Open Form</button>
{isVisible &&
<form>
<input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Name" />
<input type="number" name="age" value={formData.age} onChange={handleFormChange} placeholder="Age" />
<select name="city" value={formData.city} onChange={handleSelectChange}>
<option value="default">Choose city</option>
<option value="moscow">Moscow</option>
<option value="new-york">New York</option>
<option value="tokyo">Tokyo</option>
</select>
<button type="submit">Submit</button>
<button onClick={handleCancelClick}>Cancel</button>
</form>
}
</div>
);
}

export default Dorm;