import "@/style.css";
import { createApp } from 'vue';
import RootComponent from '@/components/RootComponent/index.vue';
import router from './router' // <---
// Mount function to start up the app
const mount = (element) => {
    const app = createApp(RootComponent);
    app.use(router).mount(element); // this a function from Vue.
};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#app');

    if (devRoot) {
        mount(devRoot);
    }
}

// We are running through container and we should export the mount function
export { mount };

