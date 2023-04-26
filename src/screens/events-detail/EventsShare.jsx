import React from "react";
import { Share, View, Button, Text } from "react-native";
export const EventsShare = ({ route }) => {
  const { url } = route.params;
  const shareData = async () => {
    try {
      await Share.share({
        message: url,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ marginTop: 80 }}>
      <Text style={{ fontSize: 18 }}></Text>
      <Button onPress={shareData} title="Share" />
    </View>
  );
};
