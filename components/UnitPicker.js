import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function UnitPicker({ unitSystem, setUnitSystem }) {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        selectedValue={unitSystem}
        onValueChange={(item) => setUnitSystem(item)}
        mode="dropdown"
        itemStyle={{ fontSize: 12 }}
      >
        <Picker.Item label="C" value="metric" />
        <Picker.Item label="F" value="imperial" />
      </Picker>
    </View>
  );
}
const styles = StyleSheet.create({
  unitsSystem: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 40,
      },
    }),
    left: 20,
    height: 50,
    width: 100,
  },
});
