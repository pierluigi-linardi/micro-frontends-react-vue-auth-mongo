import { mount } from 'vueapp/VueApp';
import React, { useRef, useEffect } from 'react';
export default ({ token }) => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current, token);
    }, []);
    return <div ref={ref} />;
};