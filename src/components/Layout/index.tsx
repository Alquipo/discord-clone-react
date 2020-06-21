import React from "react";

import { Grid } from "./styles";
import Serverlist from "../ServeList";
import ServerName from "../ServerName";

//criação padrao de componentes no react

const Layout: React.FC = () => {
  return (
    <Grid>
      <Serverlist />
      <ServerName />
    </Grid>
  );
};

export default Layout;
