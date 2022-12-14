import React, { useState } from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const { username, message } = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ':' + message);
        setForm({
            username: '',
            message: ''
        })
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <>
            <h1>event practice</h1>
            <input
                type={"text"}
                name="username"
                placeholder='사용자명'
                value={username}
                onChange={onChange}
            >
            </input>
            <input
                type="text"
                name="name"
                placeholder='put on here anything'
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            >
            </input>
            <button onClick={onClick}>확인</button>
        </>
    )
}

export default EventPractice;