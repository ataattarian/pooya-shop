import axios from "axios";
import { LoginProps, RegisterProps } from "../interfaces";

export async function login(formData: LoginProps) {
  const { data } = await axios.post(
    "http://212.24.97.65:1337/user/login/",
    formData
  );
  return data;
}

export async function signUp(formData: RegisterProps) {
  const { data } = await axios.post(
    "http://212.24.97.65:1337/user/register/",
    formData
  );
  return data;
}

export async function profile(token: any) {
  const { data } = await axios.get("http://212.24.97.65:1337/user/profile/", {
    headers: {
      Authorization: "Bearer " + token
    },
  });
  return data;
}
