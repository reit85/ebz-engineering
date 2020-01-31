import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const ProjectCard = props => {
  const { className, project, ...rest } = props;
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>

      <CardContent>
        <Grid container spacing={3}>
          
          <Grid item>
            <div className={classes.imageContainer}>
              <img alt="Project" className={classes.image} src={project.imageUrl} />
            </div>
          </Grid>

          <Grid item>
            <Grid container spacing={2}>
              <Grid item><Typography align="center" variant="h3">{project.title}</Typography></Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item><Typography align="center" variant="subtitle1" >{project.description}</Typography></Grid>
            </Grid>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default ProjectCard;
