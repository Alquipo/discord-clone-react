import React from "react";

import { Grid } from "./styles";
import Serverlist from "../ServeList";

//criação padrao de componentes no react

const Layout: React.FC = () => {
  return (
    <Grid>
      <Serverlist />
    </Grid>
  );
};

export default Layout;
