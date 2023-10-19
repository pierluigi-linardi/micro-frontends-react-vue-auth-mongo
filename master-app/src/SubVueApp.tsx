import { mount } from 'vueapp/VueApp';
import React, { useRef, useEffect } from 'react';
export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount({ mountPoint: ref.current });
    }, []);
    return <div ref={ref} />;
};