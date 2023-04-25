//en el login es importante el uso del context
//el login no esta vinculado a la navegacion
import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./LoginScreen.styles";
import { useForm, Controller } from "react-hook-form";
import { getUsers } from "../../api/user.service";
import { UserContext } from "../../contexts/UserContext";
import { useNavigation, Link } from "@react-navigation/native";
import { UserInfoScreen } from "../user/UserInfoScreen";

const ERROR_MESSAGE = "Usuario o Contraseña Incorrectos, Intentalo de nuevo";

export const LoginScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const [error, setError] = useState(null);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const values = watch(["username", "password"]);
  // const isDisabled = values[1].length < 1;
  const isDisabled = values[0].length < 1 || values[1].length < 1;

  const handleLogin = ({ username, password }) => {
    getUsers()
      .then((users) => {
        // const user = users[0];
        users.forEach((user) => {
          if (username === user.username && password === user.password) {
            console.log(user);
            setCurrentUser(user);
            // setCurrentUser({ username, password });
            navigation.navigate("Home");
            resetField('username');
            resetField('password');
          } else {
            setError(ERROR_MESSAGE);
          }
        });
      })
      .catch((err) => console.warn(err));
  };

  const toRegister = () => {
    navigation.navigate("Register", {
      backScreen: "Login",
      screen: "Register",
    });
  };

  return (
    <>
      {currentUser ? (
        <UserInfoScreen setError={setError} />
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Inicio de Sesión</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
              />
            )}
            name="username"
            rules={{ required: "El nombre de usuario es requerido" }}
          />
          {errors.username && (
            <Text style={styles.errorText}>{errors.username.message}</Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
              />
            )}
            name="password"
            rules={{ required: "La constraseña es requerida" }}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
          {error !== null && !isDisabled && (
            <Text style={styles.errorText}>{error}</Text>
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(handleLogin)}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <View>
            <Text>No tengo cuenta,</Text>
            <TouchableOpacity
              // style={styles.button}
              onPress={toRegister}
            >
              <Text style={styles.errorText}>Registrarme</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};
