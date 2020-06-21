import React from "react";

import { Grid } from "./styles";
import Serverlist from "../ServeList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";

//criação padrao de componentes no react

const Layout: React.FC = () => {
  return (
    <Grid>
      <Serverlist />
      <ServerName />
      <ChannelInfo />
    </Grid>
  );
};

export default Layout;
