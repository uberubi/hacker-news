import { Message } from "semantic-ui-react";

const ErrorMessage = ({ error }) => {
  return (
    <Message negative>
      <p>{error}</p>
    </Message>
  );
};

export default ErrorMessage;
