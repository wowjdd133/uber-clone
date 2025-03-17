import { Text, ScrollView, View, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import OAuth from "@/components/OAuth";
// import { useSignUp } from "@clerk/clerk-expo";
import ReactNativeModal from "react-native-modal";

type Props = {};

const SignUp = (props: Props) => {
  // const { isLoaded, signUp, setActive } = useSignUp();

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
    email: "",
    password: "",
  });

  const [verification, setVerification] = useState<{
    state: "default" | "pending" | "success";
    error: string;
    code: string;
  }>({
    state: "default",
    error: "",
    code: "",
  });

  const onPressVerify = () => {};

  // const onSignUpPress = async () => {
  //   if (!isLoaded) return;

  //   // Start sign-up process using email and password provided
  //   try {
  //     await signUp.create({
  //       emailAddress: formData.email,
  //       password: formData.password,
  //     });

  //     // Send user an email with verification code
  //     await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

  //     // Set 'pendingVerification' to true to display second form
  //     // and capture OTP code
  //     setVerification({
  //       ...verification,
  //       state: "pending",
  //     });
  //   } catch (err) {
  //     // See https://clerk.com/docs/custom-flows/error-handling
  //     // for more info on error handling
  //     console.error(JSON.stringify(err, null, 2));
  //   }
  // };

  // // Handle submission of verification form
  // const onVerifyPress = async () => {
  //   if (!isLoaded) return;

  //   try {
  //     const signUpAttempt = await signUp.attemptEmailAddressVerification({
  //       code: verification.code,
  //     });
  //     if (signUpAttempt.status === "complete") {
  //       // TODO: Create a database user!
  //       await setActive({ session: signUpAttempt.createdSessionId });
  //       setVerification({ ...verification, state: "success" });
  //     } else {
  //       setVerification({
  //         ...verification,
  //         error: "Verification failed.",
  //         state: "failed",
  //       });
  //     }
  //   } catch (err: any) {
  //     setVerification({
  //       ...verification,
  //       error: err.errors[0].longMessage,
  //       state: "failed",
  //     });
  //   }
  // };

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
            // onPress={onSignUpPress}
            className="mt-6"
          />

          <ReactNativeModal
            isVisible={verification.state === "pending"}
            onModalHide={() =>
              setVerification({ ...verification, state: "success" })
            }
          >
            <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
              <Text className="text-2xl font-JakartaExtraBold mb-2">
                Verification
              </Text>
              <Text className="font-Jakarta mb-5">
                We've sent a verification code to {formData.email}
              </Text>

              <InputField
                label={"Code"}
                icon={icons.lock}
                placeholder="12345"
                value={verification.code}
                keyboardType="number-pad"
                onChangeText={(code) =>
                  setVerification({ ...verification, code })
                }
              />

              {verification.error && (
                <Text className="text-red-500 text-sm mt-1">
                  {verification.error}
                </Text>
              )}

              <CustomButton
                title="Verify Email"
                onPress={onPressVerify}
                className="mt-5 bg-success-500"
              />
            </View>
          </ReactNativeModal>

          <OAuth />

          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>

        <ReactNativeModal isVisible={verification.state === "success"}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image
              source={images.check}
              className="w-[110px] h-[110px] mx-auto my-5"
            />

            <Text className="text-3xl font-JakartaBold text-center">
              Verified
            </Text>
            <Text className="text-base text-gray-400 text-center mt-2">
              You have successfully verified your account.
            </Text>

            <CustomButton
              title="Browse Home"
              onPress={() => router.replace("/(root)/(tabs)/home")}
              className="mt-5"
            />
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  );
};

export default SignUp;
