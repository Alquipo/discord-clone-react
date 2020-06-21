import React from "react";

import { Container, Title, ExpandIcon } from "./styles";

//criação padrao de componentes no react
const ServerName: React.FC = () => {
  return (
    <Container>
      <Title>Servidor Pokemon</Title>

      <ExpandIcon />
    </Container>
  );
};

export default ServerName;
