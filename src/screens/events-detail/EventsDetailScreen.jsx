import React, { useContext } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./EventsDetailScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/theme";
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
        {currentUser && (
          <Link
            style={styles.webButton}
            to={{ screen: "EventsDetailWeb", params: { url: item.url } }}
          >
            Ir a la web
          </Link>
        )}
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <MapView
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
