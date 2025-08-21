import { createApp } from "vue";
import goooHydrate from "./utils/goooHydrate";
import GhostLink from "./components/buttons/GhostLink/GhostLink.vue";
import type { GhostLinkProps } from "./components/buttons/GhostLink";


goooHydrate('outlineGhostLink', 'outline-ghost-link-', (el) => {
    const serverProps: GhostLinkProps = {
        href: el.getAttribute('data-url') ?? "",
        text: el.getAttribute('data-text') ?? "",
    }
    const app = createApp(GhostLink, serverProps)
    app.mount(el)
    return app;
})