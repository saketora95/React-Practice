import { useState, useEffect, useRef } from 'react';

function useRate(value) {
    // 使用 useRef 判斷是否為第一次渲染
    const mounted = useRef();
    // 由於 useRef 不會受到 re-render 的影響，因此使用 useRef 儲存 setTimeout
    const timeout_1 = useRef();
    const timeout_2 = useRef();
    // 記錄目前進度條的數值
    const [rate, setRate] = useState(0);

    useEffect(() => {
        if (! mounted.current) {
            // 首次渲染
            // 初始化進度條的預設值
            setRate(value);
            // 已經經過首次渲染，調整 mounted 的值
            mounted.current = true;

        } else {
            // 後續的渲染
            // 目前數值比目標數值還要大，進行遞減
            if (rate > value) {
                // 如果遞增用的 Timeout 正在運作，將其清除
                if (timeout_1.current) {
                    clearTimeout(timeout_1.current);
                }
                // 設置遞減用的 Timeout
                timeout_2.current = setTimeout( () => { setRate(rate - 1) }, 20);

            // 目前數值比目標數值還要小，進行遞增
            } else if (rate < value) {
                // 如果遞減用的 Timeout 正在運作，將其清除
                if (timeout_2.current) {
                    clearTimeout(timeout_2.current)
                }
                // 設置遞增用的 T imeout
                timeout_1.current = setTimeout( () => { setRate(rate + 1) }, 20);
            }
        }
    }, [value, rate]);

    return rate;
}

export default useRate;