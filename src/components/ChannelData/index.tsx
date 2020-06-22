import React from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

//criação padrao de componentes no react
const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages />

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #Chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
