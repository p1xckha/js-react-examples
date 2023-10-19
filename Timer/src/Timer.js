import { useState, useEffect } from "react";
import { View, Text, Vibration } from "react-native";
import CustomButton from "./CustomButton";

export const Timer = ({ initialTime }) => {
  // define each state and its setter
  const [time, setTime] = useState(initialTime * 60); // Convert minutes to seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 0.01); // we can pass a function or new value to setter
      }, 10); // 10 milli second
    } else if (time <= 0) {
      Vibration.vibrate();
    }

    return () => clearInterval(interval);
    // the effect function is executed when the following variable are changed
  }, [isRunning, time]);

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const decimals = time % 1;

  // use this function when start button is pressed
  const startTimer = () => {
    setIsRunning(true);
  };

  // use this function when Stop button is pressed
  const stopTimer = () => {
    setIsRunning(false);
  };

  // use this function when Reset button is pressed
  const resetTimer = () => {
    setTime(initialTime * 60);
    setIsRunning(false);
  };

  return (
    <View>
      <Text>
        {`${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}.${(decimals * 100).toFixed(0)}`}
      </Text>
      <CustomButton // Start button
        onPress={startTimer}
        disabled={isRunning || time === 0}
        children="Start"
        pressed={isRunning}
        buttonColor="blue"
      />
      <CustomButton // Stop button
        onPress={stopTimer}
        disabled={!isRunning}
        children="Stop"
        pressed={!isRunning}
        buttonColor="blue"
      />
      <CustomButton // Reset button
        onPress={resetTimer}
        disabled={isRunning}
        children="Reset"
        pressed={isRunning}
        buttonColor="blue"
      />
    </View>
  );
};
