import React, { useState, useEffect } from 'react';

function LoginForm() {
    const [account, setAccount] = useState('請輸入帳戶');

    return (
        <React.Fragment>
            <input type='text' onChange={ (e) => { setAccount(e.target.value) }} value={ account } />
            <div>目前輸入: { account }</div>
        </React.Fragment>
    );
}

export default LoginForm;