import React, { useState } from 'react';

const RegistrationForm = () => {
   
const [form, setForm] = useState({
firstName: '',
lastName: '',
email: '',
password: '',
});

const handleSubmit = (event) => {
event.preventDefault();
fetch('https://example.com/register', {
method: 'POST',
body: JSON.stringify(form),
})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error(error));
};

const handleChange = (event) => {
setForm({ form, [event.target.name]: event.target.value });
};

return (
    
<form onSubmit={handleSubmit}  style={{color:"red",display:"flex", justifyContent:"center"}}>
    
<label >
Имя
<input
type="text"
name="firstName"
value={form.firstName}
onChange={handleChange}
/>
</label>
<label>
Фамилия
<input
type="text"
name="lastName"
value={form.lastName}
onChange={handleChange}
/>
</label>
<label>
Email
<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
/>
</label>
<label>
Пароль
<input
type="password"
name="password"
value={form.password}
onChange={handleChange}
/>
</label>
<button type="submit">Подтвердить</button>
</form>
);
};

export default RegistrationForm;