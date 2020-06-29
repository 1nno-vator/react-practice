import React, { useState } from 'react';

function InputSample() {
    const [form, setForm] = useState({
        name: '',
        age: ''
    })

    const { name, age } = form;

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name] : value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        setForm({
            name: '',
            age: ''
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" value={name} onChange={onChange}/>
            <input type="text" name="age" value={age} onChange={onChange}/>
            <input type="submit" value="제출"/>
        </form>
    )
}

export default InputSample