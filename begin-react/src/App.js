import React from 'react';
import Hello from './Hello';
import './App.css'
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const name = 'kms';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }
  return (
    <>
      {/* <Wrapper>
        <Hello name="kms" color="red"/>
        <Hello color="red"/>
      </Wrapper> */}
      {/* <Counter/> */}
      {/* <InputSample/> */}
      <UserList/>
  </>
  );
}

export default App;
