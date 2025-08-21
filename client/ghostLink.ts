import { createApp } from "vue";
import goooHydrate from "./utils/goooHydrate";
import GhostLink from "./components/buttons/GhostLink/GhostLink.vue";
import type { GhostLinkProps } from "./components/buttons/GhostLink";


goooHydrate('ghostLink', '#ghost-link', () => {
    const serverProps: GhostLinkProps = {
        href: "",
        text: "",
    }
    const app = createApp(GhostLink, serverProps)
    app.mount('#ghost-link')
    return app;
})