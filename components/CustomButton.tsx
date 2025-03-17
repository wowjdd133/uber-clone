import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonProps } from "@/types/type";

const styles = {
  baseButton:
    "w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70",
  bgVariants: {
    primary: "bg-[#0286ff]",
    secondary: "bg-gray-500",
    danger: "bg-red-500",
    success: "bg-green-500",
    outline: "bg-transparent border-neutral-300 border-[0.5px]",
  },
  textVariants: {
    default: "text-white",
    primary: "text-black",
    secondary: "text-gray-100",
    danger: "text-red-100",
    success: "text-green-100",
  },
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${styles.baseButton} ${styles.bgVariants[bgVariant]} ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text className={`text-lg font-bold ${styles.textVariants[textVariant]}`}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
