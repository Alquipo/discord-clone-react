import React from "react";
import ServerButton from "../ServerButton";

import { Container, Separator } from "./styles";

const ServeList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={50} />
      <ServerButton />
    </Container>
  );
};

export default ServeList;
