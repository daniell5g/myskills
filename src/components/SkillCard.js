import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill} key={`${skill}-1`}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1F1E35",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 5,
  },
  textSkill: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});