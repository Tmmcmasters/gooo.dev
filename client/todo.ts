import { createApp } from "vue";
import goooHydrate from "./utils/goooHydrate";
import Todo from "./page/Todo.vue";
import { sharedPinia } from "./utils/pinia";


goooHydrate('todo', '#todo', () => {
    const app = createApp(Todo)
    app.use(sharedPinia);
    app.mount('#todo')

    return app;
})