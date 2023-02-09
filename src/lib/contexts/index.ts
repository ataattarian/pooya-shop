import { atom } from "recoil";
import { CartProps } from "../interfaces";

export const sidebarContext = atom({
  key: "sidebar",
  default: false,
});

export const tokenContext = atom({
  key: "token",
  default: {
    refresh: "",
    access: "",
  },
});

export const CartsContext = atom({
  key: "carts",
  default: [] as CartProps[],
});
