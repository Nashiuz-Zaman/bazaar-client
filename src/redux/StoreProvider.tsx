"use client";

// redux
import { store } from "./store";
import { Provider } from "react-redux";

const StoreProvider = ({ children }: Layout) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
