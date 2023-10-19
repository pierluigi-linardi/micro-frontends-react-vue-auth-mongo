import "@/style.css";
import { createApp } from 'vue';
import RootComponent from '@/components/RootComponent/index.vue';
import router from './router' // <---
// Mount function to start up the app
const mount = ({
    mountPoint
}) => {
    if (!mountPoint) {
        return;
    }
    const app = createApp(RootComponent);
    app.use(router).mount(mountPoint);
    return () => queueMicrotask(() => app.unmount());
};

// We are running through container and we should export the mount function
export { mount };

