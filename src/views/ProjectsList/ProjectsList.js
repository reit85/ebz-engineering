import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { ProjectsToolbar, ProjectsTable } from './components';
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

const ProjectsList = () => {
  const classes = useStyles();

  const [projects] = useState(mockData);

  return (
    <div className={classes.root}>
      <ProjectsToolbar />
      <div className={classes.content}>
        <ProjectsTable projects={projects} />
      </div>
    </div>
  );
};

export default ProjectsList;
