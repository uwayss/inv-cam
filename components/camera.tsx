import { Skia } from "@shopify/react-native-skia";
import { StyleSheet } from "react-native";
import {
  Camera,
  CameraDevice,
  useSkiaFrameProcessor,
} from "react-native-vision-camera";

const horizontalFlipFilter = Skia.RuntimeEffect.Make(`
  uniform shader image;
  half4 main(vec2 pos) {
    vec4 color = image.eval(pos);
    return vec4((1.0 - color).rgb, 1.0);
  }
`);
const shaderBuilder = horizontalFlipFilter
  ? Skia.RuntimeShaderBuilder(horizontalFlipFilter)
  : null;
const imageFilter = shaderBuilder
  ? Skia.ImageFilter.MakeRuntimeShader(shaderBuilder, null, null)
  : null;
const paint = Skia.Paint();
paint.setImageFilter(imageFilter);
export default function MyCamera({ device }: { device: CameraDevice }) {
  const frameProcessor = useSkiaFrameProcessor(
    (frame) => {
      "worklet";
      frame.render(paint);
    },
    [paint],
  );
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
    />
  );
}
