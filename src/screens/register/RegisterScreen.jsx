import React, { useContext, useState } from "react";
import { styles } from "./RegisterScreen.styles";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { postUser } from "../../api/user.service";
import { useForm, Controller } from "react-hook-form";
import { useNavigation, Link } from "@react-navigation/native";
import { ScrollView } from "react-native";

export const RegisterScreen = ({ navigation }) => {
  // const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      about: "",
      interests: "",
      date: "",
      location: "",
    },
  });

  const handleRegister = (data) => {
    if (data.password !== data.confirmPassword) {
      clearErrors();
      setError('password', {message: 'Las contraseñas no coinciden'});
      setError('confirmPassword', {message: 'Las contraseñas no coinciden'});
      return;
    }
    postUser(data)
      .then((user) => {
        console.log(user);
        navigation.navigate("Home");
      })
      .catch((err) => console.warn(err));
  };

  const toLogin = () => {
    navigation.navigate("Profile", {
      backScreen: "Register",
      screen: "Login",
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Registro</Text>
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
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Repetir Contraseña"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="confirmPassword"
          rules={{ required: "Repita la contraseña" }}
        />
        {errors.confirmPassword && (
          <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              style={styles.input}
              placeholder="Sobre mi"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="about"
          // rules={{ required: "Rep" }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              style={styles.input}
              placeholder="Intereses"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="interests"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Fecha"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="date"
          rules={{ required: "La fecha es requerida" }}
        />
        {errors.location && (
          <Text style={styles.errorText}>{errors.location.message}</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Ubicación"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="location"
          rules={{ required: "La ubicación es requerida" }}
        />
        {errors.location && (
          <Text style={styles.errorText}>{errors.location.message}</Text>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(handleRegister)}
        >
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
        <View>
          <Text>Ya tengo cuenta, ir a</Text>
          <TouchableOpacity
            // style={styles.button}
            onPress={toLogin}
          >
            <Text style={styles.errorText}> Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
