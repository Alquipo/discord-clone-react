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
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="FULANO"
            date="22/06/20"
            content="njfdsfhsaid"
          />
        ))}

        <ChannelMessage
          author="pikachu"
          date="22/06/2020"
          content={
            <>
              <Mention>@Alquipo Neto</Mention>, e ai brow
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
