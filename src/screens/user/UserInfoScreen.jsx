import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./UserInfoScreen.styles";
import { UserContext } from "../../contexts/UserContext";
import { useNavigation, Link } from "@react-navigation/native";


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
            uri: `https://drive.google.com/uc?id=${currentUser.avatar}`,
          }}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{currentUser.username}</Text>
          <Text style={styles.profileEvents}>Jujuy, Argentina</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionText}>{currentUser.about}</Text>
        <Text style={styles.sectionTitle}>Interests</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus
          eu nisi tincidunt ultrices. Morbi id dictum ipsum. Nunc nec lacus
          massa. Integer eget elit non elit sodales maximus.
        </Text>
      </View>
    </ScrollView>
  );
};
