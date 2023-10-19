import { useState } from "react";
import { View, Text, Button, Pressable } from "react-native";
import PropTypes from "prop-types";
import CustomButton from "./CustomButton";
import { Timer } from "./Timer";

Timer.propTypes = {
  initialTime: PropTypes.number.isRequired
};

export default function App() {
  const [isLongBreak, setIsLongBreak] = useState(false);

  return (
    <View>
      <Text>{isLongBreak ? "Long Break" : "Short Break"}</Text>
      <Timer initialTime={isLongBreak ? 20 : 5} />
      <CustomButton
        children="Switch Timer"
        onPress={() => setIsLongBreak((prev) => !prev)} // bool value
        disabled={false}
        buttonColor="black"
      />
      <Text>after you switch, press Reset</Text>
    </View>
  );
}
