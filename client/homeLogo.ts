import { createApp } from "vue";
import HomeLogo from "./components/buttons/HomeLogo.vue";
import goooHydrate from "./utils/goooHydrate";


goooHydrate('homeLogo', '#home-logo', (el) => {
    const app = createApp(HomeLogo)
    app.mount(el)
    return app;
})