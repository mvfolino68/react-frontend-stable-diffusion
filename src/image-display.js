import { Image } from "@chakra-ui/react";
const ImageDisplay = ({ image }) => {
  return <Image src={`data:image/png;base64,${image}`} alt="Generated Image" />;
};
export default ImageDisplay;
