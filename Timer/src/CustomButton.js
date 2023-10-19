import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = ({
  onPress,
  disabled,
  children,
  pressed,
  buttonColor
}) => {
  if (pressed) {
    buttonColor = "lightgray";
  }

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={() => [
        {
          backgroundColor: buttonColor,
          width: 150,
          height: 40,
          alignItems: "center",
          justifyContent: "center"
        }
      ]}
    >
      <Text style={{ color: "white" }}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
