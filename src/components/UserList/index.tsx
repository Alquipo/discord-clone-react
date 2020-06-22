import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
  isOnline?: boolean;
  isOffline?: boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot,
  isOnline,
  isOffline,
}) => {
  return (
    <User>
      <Avatar
        className={
          isBot
            ? "bot"
            : "" || isOnline
            ? "online"
            : "" || isOffline
            ? "offline"
            : ""
        }
      >
        <img src={require("../../assets/discord.svg")} alt="Thumbnail" />
      </Avatar>

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
      <UserRow isOnline nickname="Ash ketchum" />
      <UserRow isOnline nickname="Brock" />
      <UserRow isOnline nickname="Misty Williams" />

      <Role>Online - 20</Role>
      <UserRow nickname="Pokebola" isBot />
      <UserRow isOnline nickname="Pikachu" />
      <UserRow isOnline nickname="Charmander" />
      <UserRow isOnline nickname="Bulbasauro" />
      <UserRow isOnline nickname="Squirtle " />
      <UserRow isOnline nickname="Butterfly " />
      <UserRow isOnline nickname="Ratata" />
      <UserRow isOnline nickname="Muk" />
      <UserRow isOnline nickname="Ekans" />
      <UserRow isOffline nickname="Mew" />
      <UserRow isOffline nickname="Mewtwo" />
      <UserRow isOffline nickname="Cyndaquil" />
      <UserRow isOffline nickname="Totodile" />
      <UserRow isOffline nickname="Chicorita" />
    </Container>
  );
};

export default UserList;
