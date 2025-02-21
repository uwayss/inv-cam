import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";

const CameraView = () => {
  const device = useCameraDevice("front");
  const { hasPermission, requestPermission } = useCameraPermission();
  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);
  if (!hasPermission)
    return (
      <View>
        <Text>I need ur permission</Text>
      </View>
    );
  if (device == null)
    return (
      <View>
        <Text>Camera not available</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CameraView;
