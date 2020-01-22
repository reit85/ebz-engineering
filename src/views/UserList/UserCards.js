import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { UsersToolbar, UserCard } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const UserCards = () => {
  const classes = useStyles();

  const [users] = useState(mockData);
  // const [view, setView] = useState(); //TODO: Umschalten der Adsicheten realisieren List/Card

  return (
    <div className={classes.root}>
      <UsersToolbar />

      <div className={classes.content}>
        <Grid container spacing={3}>
          {users.map(user => (
            <Grid item key={user.id} lg={2} md={3} xs={6}>
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
      </div>
      
      <div className={classes.pagination}>
        <Typography variant="caption">1-10 von 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default UserCards;
