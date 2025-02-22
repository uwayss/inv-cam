import { Skia } from "@shopify/react-native-skia";
import { StyleSheet } from "react-native";
import {
  Camera,
  CameraDevice,
  useSkiaFrameProcessor,
} from "react-native-vision-camera";

export default function MyCamera({ device }: { device: CameraDevice }) {
  const frameProcessor = useSkiaFrameProcessor((frame) => {
    "worklet";
    frame.render();
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
