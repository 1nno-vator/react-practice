import React, { useState } from 'react';
import Hello from './Hello';
import './App.css'
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import NewUserList from './NewUserList';
import CreateUser from './CreateUser';

function App() {
  const [form, setForm] = useState({
    username: '',
    email: ''
  })
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: '김민성',
      email: '1nnovator@naver.com',
      active: true
    },
    {
      id: 2,
      name: '김민쏭',
      email: '1nnovator1105@gmail.com',
      active: false
    },
    {
      id: 3,
      name: '김 더 만두 민썽',
      email: 'ms_love_ys@kakao.com',
      active: false
    }
  ])
  
  const { username, email } = form;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const onsubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: userList.length + 1,
      name: username,
      email: email,
      active: false
    }

    setUserList([...userList, newUser])

    setForm({
      username: '',
      email: ''
    })
  }

  const onRemove = (id) => {
    let newUserList = userList.filter(v => 
      v.id !== id
    )
    setUserList(newUserList);
  }

  const onToggle = (id) => {
    let newUserList = userList.map(v => 
      v.id === id ? { ...v, active: !v.active } : v
    )
    setUserList(newUserList);
  }

  return (
    <>
      {/* <Wrapper>
        <Hello name="kms" color="red"/>
        <Hello color="red"/>
      </Wrapper> */}
      {/* <Counter/> */}
      {/* <InputSample/> */}
      {/* <UserList/> */}
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onsubmit={onsubmit}
      />
      <NewUserList 
        userList={userList}
        onRemove={onRemove}
        onToggle={onToggle}
      />
  </>
  );
}

export default App;
