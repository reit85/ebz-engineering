import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  AnzahlMitarbeiter,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders,
  ProjekteBearbeitung,
  AnfragenMonat
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <ProjekteBearbeitung />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <AnzahlMitarbeiter />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <AnfragenMonat />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalProfit />
        </Grid>
        <Grid item lg={8} sm={12} xl={9} xs={12}>
          <LatestSales />
        </Grid>
        <Grid item lg={4} sm={6} xl={3} xs={12}>
          <UsersByDevice />
        </Grid>
        <Grid item lg={8} sm={12} xl={9} xs={12}>
          <LatestOrders />
        </Grid>
        <Grid item lg={4} sm={6} xl={3} xs={12}>
          <LatestProducts />
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Dashboard;
