import('./bootstrap').then(
    ({ mount }) => {
        const localRoot = document.querySelector('#app');
        if (localRoot) {
            mount({ mountPoint: localRoot });
        }
    }
);

export { };