import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

//criação padrao de componentes no react
const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <UserRow nickname="Alquipo Neto" />

      <Role>Offline - 20</Role>
      <UserRow nickname="Lucas Limas" isBot />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
    </Container>
  );
};

export default UserList;
