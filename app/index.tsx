import { useEffect } from "react";
import { Text, View } from "react-native";
import {
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";
import MyCamera from "@/components/camera";
function Message({ text }: { text: string }) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
export default function CameraView() {
  const device = useCameraDevice("front");
  const { hasPermission, requestPermission } = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) requestPermission();
  }, [hasPermission, requestPermission]);
  if (!hasPermission) return <Message text="I need ur permission" />;
  if (device == null) return <Message text="Camera not Available" />;
  return <MyCamera device={device} />;
}
