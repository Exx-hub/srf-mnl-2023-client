import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeCredentials } from "../features/auth/authSlice";

const usePersist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const persistedUser = localStorage.getItem("user");

    if (persistedUser) {
      const userFound = JSON.parse(persistedUser);

      dispatch(storeCredentials(userFound));
    }
  }, []);
};

export default usePersist;
