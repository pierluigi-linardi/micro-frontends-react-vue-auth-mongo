import('./bootstrap').then(
    ({ mount }) => {
        const localRoot = document.getElementById('_sub-a-root');
        if (localRoot) {
            mount({ mountPoint: localRoot });
        }
    }
);

export { };