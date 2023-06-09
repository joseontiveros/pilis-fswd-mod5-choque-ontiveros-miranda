import React from "react";
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
import { ScrollView } from "react-native";
import { COLORS } from "../../utils/theme";

export const RegisterScreen = ({ navigation }) => {
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.safeContainer}>
        <Text style={styles.title}>Registro</Text>
        <Text style={styles.textMesagge}>Ingresa los detalles de tu cuenta</Text>
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
            />
          )}
          name="about"
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
        <View style={styles.linkContainer}>
          <Text>Ya tengo cuenta, ir a</Text>
          <TouchableOpacity
            onPress={toLogin}
          >
            <Text style={{ color: COLORS.darkblue }}> Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
