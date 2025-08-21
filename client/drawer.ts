import { createApp } from "vue";
import NavigationDrawer from "./components/drawer/NavigationDrawer.vue";
import goooHydrate from "./utils/goooHydrate";


goooHydrate('drawer', '#navigationDrawer', (el) => {
    const app = createApp(NavigationDrawer)
    app.mount(el)
    return app;
})