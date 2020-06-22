import React from "react";

import Logo from "../../assets/discord.svg";
import LogoPokemon from "../../assets/pokeball.svg";

import { FiPlus, FiCompass, FiDownload } from "react-icons/fi";

import { Button } from "./styles";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  isPokemon?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  add?: boolean;
  explore?: boolean;
  download?: boolean;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  isPokemon,
  hasNotifications,
  mentions,
  add,
  explore,
  download,
}) => {
  return (
    <Button
      isHome={isHome}
      isPokemon={isPokemon}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && <img src={Logo} alt="Discord" />}
      {isPokemon && <img src={LogoPokemon} alt="Pokemon" />}

      {add && <FiPlus size={24} color="#43B581" />}

      {explore && <FiCompass size={24} color="#43B581" />}

      {download && <FiDownload color="#43B581" size={22} />}
    </Button>
  );
};

export default ServerButton;
