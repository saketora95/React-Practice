import { useState, useEffect } from 'react';

function useBrowserSize() {
    const [device, setDevice] = useState('mobile');

    // 依據瀏覽器寬度，調整 device 的值
    function handleBrowserSize() {
        if (window.innerWidth > 768) {
            setDevice('PC');

        } else if ( window.innerWidth > 576) {
            setDevice('tablet');

        } else {
            setDevice('mobile');
        }
    }

    useEffect(() => {
        // 監聽 resize 事件
        window.addEventListener('resize', handleBrowserSize);

        // 首次打開頁面時，因為沒有調整大小而不會觸發 resize
        // 手動執行 handleBrowserSize 函數
        handleBrowserSize();

        // 元件移除時，也撤除監聽 resize 事件
        return (() => {
            window.removeEventListener('resize', handleBrowserSize);
        });
    }, []);

    return device;
}

export default useBrowserSize;