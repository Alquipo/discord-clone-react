import React from "react";

import { Grid } from "./styles";
import Serverlist from "../ServeList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";
import ChannelList from "../ChannelList";
import UserInfo from "../UserInfo";
import UserList from "../UserList";
import ChannelData from "../ChannelData";

//criação padrao de componentes no react

const Layout: React.FC = () => {
  return (
    <Grid>
      <Serverlist />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
};

export default Layout;
