import { StyleSheet } from "react-native";
import {
  Camera,
  CameraDevice,
  useFrameProcessor,
} from "react-native-vision-camera";

export default function MyCamera({ device }: { device: CameraDevice }) {
  const frameProcessor = useFrameProcessor((frame) => {
    "worklet";
  }, []);
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
    />
  );
}
