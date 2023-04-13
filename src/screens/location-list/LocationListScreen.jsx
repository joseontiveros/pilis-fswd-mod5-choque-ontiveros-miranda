import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { styles } from "./LocationListScreen.styles";
// import { data } from '../../api/data'
import { SearchBar } from "../../components/search-bar/SearchBar";
import { getLocationList } from "../../api/location.service";

export const LocationListScreen = ({ navigation }) => {
  //dentro del estado voy a guardar el input del usuario
  const [searchQuery, setSearchQuery] = useState("");
  const [locationList, setLocationList] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const filteredLocations = locationList.filter((location) =>
    //en filteredLocations se encuentra el nuevo array
    //aca se filtran los arrays como si hay una 'a' en la primera, segunda posicion
    //searchquery contiene lo que ingresa el usuario, a medida que ingresa palabras se van filtrando las ubicaciones
    //se filtra por titulo de ubicacion, el titulo se lleva a minuscula con tolowerCase luego lo comparo con searchQuery si lo que ingreso el usuario se encuentra o esta incluido en el titulo de la ubicacion
    location.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    //llamamos a la api
    getLocationList()
      .then((data) => {
        setLocationList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const location = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("LocationDetail", { item })}>
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: `https://drive.google.com/uc?id=${item.images[0]}` }}
          style={styles.itemImage}
        />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </Pressable>
  );

  return (
    //searchQuery valor que va cambiando el usuario
    //en searchbar tenemos la lista de
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredLocations}
        renderItem={location}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  );
};
