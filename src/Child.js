import React, { useState, useEffect } from 'react';

function Son(props) {
    function askForAllowance() {
        props.askAllowance('Son', 100);
    }

    return(
        <div>
            <button onClick={ askForAllowance }>詢問提高零用錢</button> 這裡是兒子，拿到 { props.allowance } 元作為零用錢。
        </div>
    );
}

function Daughter(props) {
    const [feeling, setFeeling] = useState('還不確定');
    const [exceptValue, setExceptValue] = useState(50);

    function askForAllowance() {
        props.askAllowance('Daughter', 100);
    }

    useEffect(() => {
        // componentDidMount 和 componentDidUpdate
        // 第一次渲染後觸發 & DOM 被更新後執行
        if (props.allowance > exceptValue)
            setFeeling('很好');
        else
            setFeeling('不好');


    }, [props.allowance]);

    return(
        <div>
            <button onClick={ askForAllowance }>詢問提高零用錢</button> 這裡是女兒，拿到 { props.allowance } 元作為零用錢，心情上覺得 { feeling }。
        </div>
    );
}

export {Son, Daughter};