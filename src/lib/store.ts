import { createStore, SetStoreFunction, Store } from "solid-js/store";
import { createEffect } from "solid-js";

function createLocalStore<T>(initState: T): [Store<T>, SetStoreFunction<T>] {
  const [state, setState] = createStore(initState);
  if (localStorage["tinarskii-com"]) {
    setState(JSON.parse(localStorage["tinarskii-com"]));
  }
  createEffect(
    () => (localStorage["tinarskii-com"] = JSON.stringify(state)),
  );
  return [state, setState];
}

export const [state, setState] = createLocalStore({
  lang: 'en'
});
