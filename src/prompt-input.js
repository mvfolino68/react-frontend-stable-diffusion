import {
    FormControl,
    FormLabel, Input
} from "@chakra-ui/react";
const PromptInput = ({
  prompt,
  negativePrompt,
  handlePromptChange,
  handleNegativePromptChange,
}) => {
  return (
    <>
      <FormControl>
        <FormLabel>Stable Diffusion Prompt</FormLabel>
        <Input
          value={prompt}
          defaultValue={prompt}
          onChange={handlePromptChange}
          width={"500px"}
        ></Input>
      </FormControl>
      <FormControl>
        <FormLabel>Negative Prompt</FormLabel>
        <Input
          value={negativePrompt}
          defaultValue={negativePrompt}
          onChange={handleNegativePromptChange}
          width={"500px"}
        ></Input>
      </FormControl>
    </>
  );
};
export default PromptInput;
