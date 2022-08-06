import React, { useState } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <>
            <div>
                <input value={name} onChange={onChangeName}></input>
                <input value={nickname} onChange={onChangeNickname}></input>
            </div>
            <div>
                <div>
                    <b>name: </b> {name}
                </div>
                <div>
                    <b>nickName: </b>{nickname}
                </div>
            </div>
        </>
    )
}

export default Info;