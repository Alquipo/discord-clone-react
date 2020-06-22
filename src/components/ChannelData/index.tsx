import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

import ChannelMessage, { Mention } from "../ChannelMessage";

//criação padrao de componentes no react
const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {/* {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="FULANO"
            date="22/06/20"
            content="njfdsfhsaid"
          />
        ))} */}

        <ChannelMessage
          author="Pikachu"
          date="22/06/20"
          content="Pika Pika pikachu"
        />

        <ChannelMessage
          author="Charmander"
          date="22/06/20"
          content="Cha Cha Chamander"
        />

        <ChannelMessage
          author="Bulbasauro"
          date="22/06/20"
          content="Bulbasaur Bulbasaur"
        />

        <ChannelMessage
          author="Squirtle"
          date="22/06/20"
          content="Squirtle Squirtle"
        />

        <ChannelMessage
          author="Butterfly"
          date="22/06/20"
          content="Butterflyyyyyyyyy"
        />

        <ChannelMessage
          author="Ekans"
          date="22/06/20"
          content="Ekanssssssssssss"
        />

        <ChannelMessage
          author="Pikachu"
          date="22/06/20"
          content="Pika Pika pikachu"
        />

        <ChannelMessage
          author="Charmander"
          date="22/06/20"
          content="Cha Cha Chamander"
        />

        <ChannelMessage
          author="Ekans"
          date="22/06/20"
          content="Ekanssssssssssss"
        />

        <ChannelMessage
          author="Squirtle"
          date="22/06/20"
          content="Squirtle Squirtle"
        />
        <ChannelMessage
          author="Pokebola"
          date="22/06/2020"
          content={
            <>
              <Mention>@everyone</Mention> Vou capturar todos vocês
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #Chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
