//en el login es importante el uso del context
//el login no esta vinculado a la navegacion
import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./LoginScreen.styles";
import { useForm, Controller } from "react-hook-form";
import { getUsers } from "../../api/user.service";
import { UserContext } from "../../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";

const ERROR_MESSAGE = 'Usuario o Contraseña Incorrectos, Intentalo de nuevo'
export const LoginScreen = () => {

  const navigation = useNavigation();
  const [error, setError] = useState(null);
  const { setCurrentUser } = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const values = watch(['username', 'password']);
  const isDisabled = values[0].length < 1 || values[1].length < 1;

  const handleLogin = ({ username, password }) => {
    getUsers()
      .then((users) => {
        // const user = users[0];
        users.forEach((user) => {
          if (username === user.username && password === user.password) {
            setCurrentUser({ username, password });
            navigation.navigate("Home");
          } else {
            setError(ERROR_MESSAGE);
          }
        });
      })
      .catch((err) => console.warn(err));
  };

  return (
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
    </View>
  );
};
