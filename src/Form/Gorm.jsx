import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

const Gorm = () => {
const [form,setForm]=useState(false)
const openForm= ()=>{
setForm(true)
}
const hideForm=()=>{
    setForm(false)
}
const handleFormChange = (e) => {
    console.log(e.target.value)
    }
    
    const handleSelectChange = (e) => {
    console.log(e.target.value)
    }

return (
<div>
<button onClick={openForm}>Открыть форму</button>
  {form &&
    <form>
<input type="text" name="name"  placeholder="Name" onChange={handleFormChange} />
<input type="number" name="age" placeholder="Age"  onChange={handleFormChange}/>
<select name="city" onChange={handleSelectChange}>
<option value="default">Выбери город</option>
<option value="moscow">Москва</option>
<option value="Saint Petersburg">Санкт-Петербург</option>
<option value="Kazan">Казань</option>
</select>
<button type="submit">Подтвердить</button>
<button onClick={hideForm}>Закрыть</button>
</form>}
</div>

);
}

export default Gorm;