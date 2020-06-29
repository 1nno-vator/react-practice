import React, { useState } from 'react';

function User({ username, email }) {
    return (
        <div>나의 이름은 {username} 이고 나의 email은 {email} 이다.</div>
    )
}

function UserList() {
    const users = [
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com'
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com'
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com'
        }
      ];

    return (
        <div>
            {
                users.map(v => (
                    <User key={v.id} username={v.username} email={v.email}/>
                ))
            }
        </div>
    )
}

export default UserList;