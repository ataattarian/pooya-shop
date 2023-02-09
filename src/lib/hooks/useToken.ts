import { useRecoilState } from "recoil";
import { tokenContext } from "../contexts";

export default function useToken() {
  const [token, set] = useRecoilState(tokenContext);

  const setToken = (newToken: any) => set(newToken);

  return { token, setToken };
}
