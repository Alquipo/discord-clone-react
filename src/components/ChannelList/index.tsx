import React from "react";

import ChannelButton from "../ChannelButton";
import { Container, Category, AddCategoryIcon } from "./styles";

//criação padrao de componentes no react
const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Chat-Livre" />
      <ChannelButton channelName="PokeDex" />
      <ChannelButton channelName="Liga-Pokemon" />
      <ChannelButton channelName="Ginasios" />
      <ChannelButton channelName="Centro-Pokemon" />
      <ChannelButton channelName="Equipe-Rocket (secret)" />
    </Container>
  );
};

export default ChannelList;
