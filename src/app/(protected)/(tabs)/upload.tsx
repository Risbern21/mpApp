import { useState } from "react";
import * as imagePicker from "expo-image-picker";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import CustomHeader from "@/src/components/CustomHeader";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Upload = () => {
  const [image, setImage] = useState<imagePicker.ImagePickerAsset | null>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleConfirm = (date: Date) => {
    setSelectedDate(date);
    setDatePickerVisibility(false);
  };

  const pickImage = async () => {
    let result = await imagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
      exif: false,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  return (
    <>
      <CustomHeader title="Upload An Image" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Pressable
          onPress={pickImage}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: "#007AFF",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <View
            style={{
              width: 36,
              height: 36,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                position: "absolute",
                width: 36,
                height: 4,
                backgroundColor: "#fff",
                borderRadius: 2,
              }}
            />
            <View
              style={{
                position: "absolute",
                width: 4,
                height: 36,
                backgroundColor: "#fff",
                borderRadius: 2,
              }}
            />
          </View>
        </Pressable>
        <Text style={{ color: "#898989" }}>
          Upload your custom image to be analyzed
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 10,
          elevation: 3,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
          marginHorizontal: 20,
          padding: 10,
          gap: 15,
        }}
      >
        <View>
          <Text>Sample Title</Text>
          <TextInput
            placeholder="eg., Dal Lake Sample"
            style={{
              borderWidth: 1,
              borderColor: "#898989",
              borderRadius: 5,
            }}
          />
        </View>
        <View>
          <Text>Location</Text>
          <TextInput
            placeholder="eg., Srinagar,In."
            style={{
              borderWidth: 1,
              borderColor: "#898989",
              borderRadius: 5,
            }}
          />
        </View>
        <View>
          <Text>Collection Date</Text>
          <Pressable
            onPress={() => setDatePickerVisibility(true)}
          >
            <Text
              style={{
                borderWidth: 1,
                borderColor: "#898989",
                borderRadius: 5,
                padding: 10,
                color:"#898989"
              }}
            >
              {selectedDate ? selectedDate.toDateString() : "Select A Date"}
            </Text>
          </Pressable>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={() => setDatePickerVisibility(false)}
          />
        </View>
      </View>

      <View style={{ margin: 20 }}>
        <Button title="Upload Sample for Analysis" />
      </View>
    </>
  );
};

export default Upload;
