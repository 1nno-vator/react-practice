import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    const style = {
        color: user.active ? 'red' : 'blue',
        cursor: 'pointer'
    };

    useEffect(() => {
        // console.log('컴포넌트가 화면에 나타남');
        console.log('user 값이 설정됨');
        console.log(user);
        return () => {
        //   console.log('컴포넌트가 화면에서 사라짐');
        console.log('user 가 바뀌기 전..');
        console.log(user);
        };
      }, [user]);
    
    return (
        <div>
            <b style={style} onClick={() => onToggle(user.id)}>이름 : {user.name}</b> / 이메일 : {user.email}
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function NewUserList({ userList, onRemove, onToggle }) {

    return (
        <>
            <div>
                {
                    userList.map((value, idx) =>
                        (
                            <User key={idx} user={value} onRemove={onRemove} onToggle={onToggle}/>
                        )
                    )
                }
            </div>
        </>
    )

}

export default NewUserList;