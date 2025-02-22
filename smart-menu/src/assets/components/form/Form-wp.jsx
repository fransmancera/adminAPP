import React, { useState } from 'react'
import Input from '../input/Input.jsx';
import Button from '../button/Button.jsx';

const FormWp = () => {

    const [values, setValues] = useState({
        userName: ''
    });

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:[e.target.value]});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        {/* Change this when the API is ready */}
        {/* axios.post('url', values) */}
        localStorage.setItem('Sesion_Usuario', JSON.stringify(values));
        console.log(values);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Input inputName="userName" onChangeInput={(e) => handleChanges(e)} inputRequired={true}/>
            <Button btnType="submit" btnTitle="Ingresar"/>
        </form>   
    </div>
  )
}

export default FormWp