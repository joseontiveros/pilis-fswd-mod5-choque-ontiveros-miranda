import React, { useContext } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { styles } from "./EventsDetailScreen.styles";
import { Link } from "@react-navigation/native";
import { UserContext } from "../../contexts/UserContext";

export const EventsDetailScreen = ({ route }) => {
  const { item } = route.params;
  const { currentUser } = useContext(UserContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          {item.images.map((image, idx) => (
            <Image
              key={idx}
              source={{ uri: `https://drive.google.com/uc?id=${image}` }}
              style={styles.image}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.Events}>{item.Events}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.hour}>{item.hour}</Text>
        <View style={styles.linkContainer}>
          {currentUser && (
            <Link
              style={styles.webButton}
              to={{ screen: "EventsDetailWeb", params: { url: item.url } }}
            >
              Ir a la web
            </Link>
          )}
          {currentUser && (
            <Link
              style={styles.webButton}
              to={{ screen: "EventsShare", params: { url: item.url } }}
            >
              Compartir
            </Link>
          )}
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: item.locationCoordinates.latitude,
          longitude: item.locationCoordinates.longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
      >
        <Marker
          coordinate={{
            latitude: item.locationCoordinates.latitude,
            longitude: item.locationCoordinates.longitude,
          }}
          title={item.title}
        />
      </MapView>
    </ScrollView>
  );
};
