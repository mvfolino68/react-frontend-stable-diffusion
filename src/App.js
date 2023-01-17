import {
  Box,
  Center,
  ChakraProvider,
  Container,
  Heading,
  Image,
  Link,
  StackDivider,
  Text,
  VStack
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { env } from './env';
import GenerateButton from "./generate-button";
import ImageDisplay from "./image-display";
import InferenceSteps from "./inference-steps";
import LoadingIndicator from "./loading-indicator";
import PromptInput from "./prompt-input";
const App = () => {
  const [image, updateImage] = useState();
  const [inferenceSteps, updateInferenceSteps] = useState(5);
  const [prompt, updatePrompt] = useState("Your initial prompt");
  const [negativePrompt, updateNegativePrompt] = useState(
    "Your initial negative prompt"
  );
  const [loading, updateLoading] = useState();
  const [showTooltip, updateShowTooltip] = useState();

  const handlePromptChange = (e) => {
    updatePrompt(e.target.value);
  };

  const handleShowTooltipChange = (e) => {
    updateShowTooltip(e.target.value);
  };

  const handleNegativePromptChange = (e) => {
    updateNegativePrompt(e.target.value);
  };

  const handleInferenceStepsChange = (e) => {
    updateInferenceSteps(e);
  };

  const generateImage = async (prompt, negativePrompt, inferenceSteps) => {
    updateLoading(true);
    const result = await axios.get(
      `http://${env.REACT_APP_API_DOMAIN}:${env.REACT_APP_API_PORT}/image/?prompt=${prompt}?negative_prompt=${negativePrompt}&num_inference_steps=${inferenceSteps}`
    );
    updateImage(result.data);
    updateLoading(false);
  };

  return (
    <ChakraProvider>
      <Container>
        {" "}
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          <Center>
            {" "}
            <Heading align="center">
              Stable Diffusion Front and Backend Example
            </Heading>
          </Center>
          <Center>
            <Text align="center" marginBottom={"10px"}>
              This react application leverages the model trained by Stability AI
              and Runway ML to generate images using the Stable Diffusion Deep
              Learning model. The frontend is built with React and Chakra-UI.
              The backend is built with Python and FastAPI.
               The model can be found on{" "}
              <Link
                href={"https://huggingface.co/runwayml/stable-diffusion-v1-5"}
              >
                Hugging Face Hub
              </Link>
            </Text>
          </Center>
        </VStack>
        <Box marginBottom={"10px"}>
          {" "}
          <Center>
            <VStack>
              <PromptInput
                prompt={prompt}
                negativePrompt={negativePrompt}
                handlePromptChange={handlePromptChange}
                handleNegativePromptChange={handleNegativePromptChange}
              />{" "}
              <InferenceSteps
                inferenceSteps={inferenceSteps}
                handleInferenceStepsChange={handleInferenceStepsChange}
                handleShowTooltipChange={handleShowTooltipChange}
                showTooltip={showTooltip}
              />{" "}
            </VStack>
          </Center>
        </Box>
        <Box marginTop={"10px"}>
          <Center>
            <GenerateButton
              handleGenerateClick={() =>
                generateImage(prompt, negativePrompt, inferenceSteps)
              }
            />
          </Center>
        </Box>
        <Box marginTop={"10px"}>
          {loading ? (
            <LoadingIndicator loading={loading} />
          ) : image ? (
            <ImageDisplay image={image} />
          ) : (
            <Box>
              <Text align="center">
                Update prompts and a new Stable Diffusion image will be
                generated.
              </Text>
              <Center>
                <Image src="/download.png" boxShadow="lg" />
              </Center>
            </Box>
          )}
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default App;
