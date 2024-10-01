import AuthService from "../utils/auth";
import { useEffect } from "react";
import { SET_USER } from "../context/actions";
import { useGlobalContext } from "../context/GlobalContext";

export default function Auth({ children }) {
  const [state, dispatch] = useGlobalContext();

  useEffect(() => {
    const handleSetAuthenticatedUser = () => {
      if (!AuthService.loggedIn()) return;

      dispatch({
        type: SET_USER,
        payload: {
          ...AuthService.getProfile().data,
        },
      });
    };

    handleSetAuthenticatedUser();
  }, [dispatch]);

  return children;
}
