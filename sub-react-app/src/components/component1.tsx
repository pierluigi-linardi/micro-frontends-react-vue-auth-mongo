import React, { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
export default () => <Toast bg={"warning"}>
    <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
    </Toast.Header>
    <Toast.Body>Hello, world! COMPONENT1</Toast.Body>
</Toast>