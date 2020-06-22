import React from "react";
import ServerButton from "../ServerButton";

import { Container, Separator } from "./styles";

const ServeList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton selected isPokemon hasNotifications mentions={3} />
      <ServerButton hasNotifications />
      <ServerButton add />
      <ServerButton explore />

      <Separator />

      <ServerButton download />
    </Container>
  );
};

export default ServeList;
