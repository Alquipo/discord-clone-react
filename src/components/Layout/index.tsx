import React from "react";

import { Grid } from "./styles";
import Serverlist from "../ServeList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";
import ChannelList from "../ChannelList";
import UserInfo from "../UserInfo";

//criação padrao de componentes no react

const Layout: React.FC = () => {
  return (
    <Grid>
      <Serverlist />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
    </Grid>
  );
};

export default Layout;
