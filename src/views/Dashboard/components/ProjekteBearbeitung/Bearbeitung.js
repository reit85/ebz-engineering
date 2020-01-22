import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700,
    fontSize: '1em',
  },
  number: {
    marginTop: theme.spacing(1)
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 36,
    width: 36,
    
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));

const Bearbeitung = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography className={classes.title} color="textSecondary" gutterBottom variant="body2">
              ANGEBOTE IN BEARBEITUNG
            </Typography>
            <Typography variant="h3" className={classes.number}>
              6 Angebote
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AutorenewIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Bearbeitung.propTypes = {
  className: PropTypes.string
};

export default Bearbeitung;
