import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { UserInfoScreen } from "../user/UserInfoScreen";
import { LoginScreen } from "../login/LoginScreen";

export const ProfileScreen = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      {currentUser ? (
        //si existe un usuario logueado se devuelve userinfoscrenn
        <UserInfoScreen />
      ) : (
        //sino
        <LoginScreen />
      )}
    </>
  );
};
