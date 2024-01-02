import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { GridRow, GridColumn, Grid } from "semantic-ui-react";

// import { Button, Icon, Label } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <ProductList />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
