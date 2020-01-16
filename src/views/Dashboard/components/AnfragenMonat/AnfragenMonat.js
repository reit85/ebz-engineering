import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar
} from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

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
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: 56,
    width: 56
  },
  icon: {
    height: 36,
    width: 36
  },
  progress: {
    marginTop: theme.spacing(3)
  }
}));

const AnfragenMonat = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              ANFRAGEN DIESEN MONAT
            </Typography>
            <Typography variant="h3" className={classes.number}>4 Anfragen</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <InsertChartIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        {/* <LinearProgress
          className={classes.progress}
          value={75.5}
          variant="determinate"
        /> */}
      </CardContent>
    </Card>
  );
};

AnfragenMonat.propTypes = {
  className: PropTypes.string
};

export default AnfragenMonat;
