import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./UserInfoScreen.styles";
import { UserContext } from "../../contexts/UserContext";

export const UserInfoScreen = ({ setError }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleLogout = () => {
    setCurrentUser(null);
    setError(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: `${currentUser.avatar}`,
          }}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{currentUser.username}</Text>
          <Text style={styles.profileEvents}>{currentUser.location}</Text>
          <Text style={styles.profileEvents}>- {currentUser.date} -</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Sobre mí</Text>
        <Text style={styles.sectionText}>{currentUser.about}</Text>
        <Text style={styles.sectionTitle}>Intereses</Text>
        <Text style={styles.sectionText}>{currentUser.interests}</Text>
      </View>
    </ScrollView>
  );
};
