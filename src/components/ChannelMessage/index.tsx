import React from "react";

import { Container, Avatar, Message, Header, Content } from "./styles";
export { Mention } from "./styles";

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}
//criação padrao de componentes no react
const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  hasMention,
  isBot,
}) => {
  return (
    <Container className={hasMention ? "mention" : ""}>
      <Avatar className={isBot ? "bot" : ""} />

      <Message>
        <Header>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  );
};

export default ChannelMessage;
