import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./SearchBar.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/theme";
//searchQuery lo que ingresa el usuario
// handleSearch en una funcion que maneja el evento onchange
export const SearchBar = ({ handleSearch, searchQuery }) => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color={COLORS.primary} />
      <TextInput
        placeholder="¿A dónde quieres ir?"
        style={styles.searchInput}
        //se activa con cada cambio en el texto y llama a handleSeach
        //en onchange recibe el cambio, el valor
        //dentro de handlesearch se pasa el valor recibido automaticamente al handleSearch que se encuentra en locationlistscreen
        onChangeText={handleSearch}
        value={searchQuery}
      />
    </View>
  );
};
