import { createStore } from "vuex";
import AuthModule from "./modules/AuthModule";
import DemoModule from "./modules/DemoModule";

export default createStore({
  modules: {
    auth: AuthModule,
    demo: DemoModule,
  },
});
