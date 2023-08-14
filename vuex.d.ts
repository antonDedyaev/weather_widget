import { Store } from "vuex";
import ILocation from "./src/models/ILocation";

declare module "@vue/runtime-core" {
  interface State {
    searchQuery: string;
    dataFetched: boolean;
    locations: ILocation[];
    errors: boolean;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
