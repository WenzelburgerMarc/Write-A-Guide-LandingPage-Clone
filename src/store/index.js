import { createStore } from "vuex";
import DemoModule from "./modules/DemoModule";

export default createStore({
  modules: {
    demo: DemoModule,
  },
});
