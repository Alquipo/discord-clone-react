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
      <Role>Moderadores - 3</Role>
      <UserRow nickname="Ash ketchum" />
      <UserRow nickname="Brock" />
      <UserRow nickname="Misty Williams" />

      <Role>Online - 20</Role>
      <UserRow nickname="Pokebola" isBot />
      <UserRow nickname="Pickachu" />
      <UserRow nickname="Charmander" />
      <UserRow nickname="Bulbasauro" />
      <UserRow nickname="Squirtle " />
      <UserRow nickname="Butterfly " />
      <UserRow nickname="Ratata" />
      <UserRow nickname="Muk" />
      <UserRow nickname="Ekans" />
      <UserRow nickname="Mew" />
      <UserRow nickname="Mewtwo" />
      <UserRow nickname="Cyndaquil" />
      <UserRow nickname="Totodile" />
      <UserRow nickname="Chicorita" />
    </Container>
  );
};

export default UserList;
