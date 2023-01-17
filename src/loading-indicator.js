import {
  Spinner
} from "@chakra-ui/react";
const LoadingIndicator = ({ loading }) => {
  return <>{loading ? <Spinner size="md" /> : null}</>;
};
export default LoadingIndicator;
