import {
  FormControl,
  FormLabel,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip
} from "@chakra-ui/react";

const InferenceSteps = ({
  inferenceSteps,
  handleInferenceStepsChange,
  handleShowTooltipChange,
  showTooltip,
}) => {
  return (
    <FormControl>
      <FormLabel>Number of Iterations</FormLabel>
      <Slider
        id="slider"
        value={inferenceSteps}
        onChange={(e) => handleInferenceStepsChange(e)}
        width={"500px"}
        defaultValue={inferenceSteps}
        min={0}
        max={100}
        colorScheme="teal"
        onMouseEnter={() => handleShowTooltipChange(true)}
        onMouseLeave={() => handleShowTooltipChange(false)}
      >
        <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
          25
        </SliderMark>
        <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
          50
        </SliderMark>
        <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
          75
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${inferenceSteps}`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </FormControl>
  );
};

export default InferenceSteps;
