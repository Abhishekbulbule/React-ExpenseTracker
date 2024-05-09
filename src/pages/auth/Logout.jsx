import secureLocalStorage from "react-secure-storage";

export const Logout = () => {
  secureLocalStorage.clear();
}
