import { createWebHistory, createRouter } from "vue-router";
import Component1 from "@/components/Component1/index.vue";
import Component2 from "@/components/Component2/index.vue";

const routes = [
    {
        path: "/component1",
        name: "component1",
        component: Component1,
    },
    {
        path: "/component2",
        name: "component2",
        component: Component2,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;