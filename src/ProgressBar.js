import React, { useState, useEffect, useRef } from 'react';

function CombineBar(props) {
    // 使用 useRef 判斷是否為第一次渲染
    const mounted = useRef();
    // 由於 useRef 不會受到 re-render 的影響，因此使用 useRef 儲存 setTimeout
    const timeout_1 = useRef();
    const timeout_2 = useRef();
    // 記錄目前進度條的數值
    const [percent, setPercent] = useState(10);
    // 記錄遞增/減時的目標數值
    const [targetValue, setTargetValue] = useState(50);

    useEffect(() => {
        if (! mounted.current) {
            // 首次渲染
            // 初始化進度條的預設值
            setPercent(percent);
            // 已經經過首次渲染，調整 mounted 的值
            mounted.current = true;

        } else {
            // 後續的渲染
            // 目前數值比目標數值還要大，進行遞減
            if (percent > targetValue) {
                // 如果遞增用的 Timeout 正在運作，將其清除
                if (timeout_1.current) {
                    clearTimeout(timeout_1.current);
                }
                // 設置遞減用的 Timeout
                timeout_2.current = setTimeout( () => { setPercent(percent - 1) }, 20);

            // 目前數值比目標數值還要小，進行遞增
            } else if (percent < targetValue) {
                // 如果遞減用的 Timeout 正在運作，將其清除
                if (timeout_2.current) {
                    clearTimeout(timeout_2.current)
                }
                // 設置遞增用的 Timeout
                timeout_1.current = setTimeout( () => { setPercent(percent + 1) }, 20);
            }
        }
    }, [targetValue, percent]);

    // 如果在 button 直接設置 setTargetValue(90) 會產生反覆 re-render 的錯誤
    // 因此要以 () => setTargetValue(90) 來設置
    return(
        <React.Fragment>
            <div className="progress-back" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
                <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: percent.toString() + "%", height: "100%", borderRadius: "10px" }}></div>
            </div>
            目前比率: { percent.toFixed(0) }%
            <button onClick={ () => setTargetValue(90) }>調整至 90%</button>
            <button onClick={ () => setTargetValue(10) }>調整至 10%</button>
        </React.Fragment>
    );
}

function ProgressBar(props) {
    // 記錄進度條的數值，在進行遞增/減時也擔當目標數值
    const [value, setValue] = useState(10);

    return(
        <Bar value={ value } onClick={ (e) => { setValue(parseInt(e.target.value)) } } />
    );
}

function Bar(props) {
    // 使用 useRef 判斷是否為第一次渲染
    const mounted = useRef();
    // 由於 useRef 不會受到 re-render 的影響，因此使用 useRef 儲存 setTimeout
    const timeout_1 = useRef();
    const timeout_2 = useRef();
    // 記錄目前進度條的數值
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        if (! mounted.current) {
            // 首次渲染
            // 初始化進度條的預設值
            setPercent(props.value);
            // 已經經過首次渲染，調整 mounted 的值
            mounted.current = true;

        } else {
            // 後續的渲染
            // 目前數值比目標數值還要大，進行遞減
            if (percent > props.value) {
                // 如果遞增用的 Timeout 正在運作，將其清除
                if (timeout_1.current) {
                    clearTimeout(timeout_1.current);
                }
                // 設置遞減用的 Timeout
                timeout_2.current = setTimeout( () => { setPercent(percent - 1) }, 20);

            // 目前數值比目標數值還要小，進行遞增
            } else if (percent < props.value) {
                // 如果遞減用的 Timeout 正在運作，將其清除
                if (timeout_2.current) {
                    clearTimeout(timeout_2.current)
                }
                // 設置遞增用的 Timeout
                timeout_1.current = setTimeout( () => { setPercent(percent + 1) }, 20);
            }
        }
    }, [props.value, percent]);

    return(
        <React.Fragment>
            <div className="progress-back" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
                <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: percent.toString() + "%", height: "100%", borderRadius: "10px" }}></div>
            </div>
            目前比率: { percent.toFixed(0) }%
            <button value={ 90 } onClick={ props.onClick }>調整至 90%</button>
            <button value={ 10 } onClick={ props.onClick }>調整至 10%</button>
        </React.Fragment>
    );
}

export {ProgressBar, CombineBar};