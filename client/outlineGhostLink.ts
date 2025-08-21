import { createApp } from "vue";
import goooHydrate from "./utils/goooHydrate";
import type { GhostLinkProps } from "./components/buttons/GhostLink";
import OutlineGhostLink from "./components/buttons/OutlineGhostLink/OutlineGhostLink.vue";


goooHydrate('outlineGhostLink', 'outline-ghost-link-', (el) => {
    const serverProps: GhostLinkProps = {
        href: el.getAttribute('data-url') ?? "",
        text: el.getAttribute('data-text') ?? "",
    }
    const app = createApp(OutlineGhostLink, serverProps)
    app.mount(el)
    return app;
})