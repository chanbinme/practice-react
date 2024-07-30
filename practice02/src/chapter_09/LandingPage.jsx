import React, {useState } from 'react';
import Toolbar from './Toolbar';

function LandingPage(props) {
    const [isLoggedin, setIsLoggedin ] = useState(false);

    const onClickLogin = () => {
        setIsLoggedin(true);
    }

    const onClickLogout = () => {
        setIsLoggedin(false);
    }

    return (
        <div>
            <Toolbar
                isLoggedin={isLoggedin}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{ padding: 16 }}>루이까또즈와 함께하는 가방 쇼핑</div>
        </div>
    )
}

export default LandingPage;