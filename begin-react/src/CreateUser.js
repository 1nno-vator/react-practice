import React, { useState } from 'react';

function CreateUser({ username, email, onChange, onsubmit }) {
    return (
        <form onSubmit={onsubmit}>
            <input type='text' name='username' placeholder='이름' value={username} onChange={onChange}/>
            <input type='text' name='email' placeholder='이메일' value={email} onChange={onChange}/>
            <input type='submit' vaue='제출'/>
        </form>
    )
}

export default CreateUser;