import { Text, ScrollView, View, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

type Props = {};

const SignUp = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};

  return (
    <ScrollView className="bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[220px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[220px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={formData.name}
            onChangeText={(value) => {
              setFormData({ ...formData, name: value });
            }}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={formData.email}
            onChangeText={(value) => {
              setFormData({ ...formData, email: value });
            }}
          />
          <InputField
            label="password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={formData.password}
            secureTextEntry={true}
            onChangeText={(value) => {
              setFormData({ ...formData, password: value });
            }}
          />

          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />

          <OAuth />

          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>

        {/* verification Modal */}
      </View>
    </ScrollView>
  );
};

export default SignUp;
