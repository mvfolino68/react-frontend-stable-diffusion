import {
  Button
} from "@chakra-ui/react";
const GenerateButton = ({ handleGenerateClick }) => {
  return <Button onClick={handleGenerateClick}> Generate Image</Button>;
};
export default GenerateButton;
