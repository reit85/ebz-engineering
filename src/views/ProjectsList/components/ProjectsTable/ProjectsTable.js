import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';

import { getInitials } from 'helpers';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2),
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  imageContainer: {
    height: 48,
    width: 48,
    margin: '0',
    marginRight: '14px',
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
}));

const ProjetcsTable = props => {
  const { className, projects, ...rest } = props;
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>

              <TableHead>
                <TableRow>
                  <TableCell>Kunde</TableCell>
                  <TableCell>Projekt</TableCell>
                  <TableCell>Sonstiges</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {projects.slice(0, rowsPerPage).map(project => (
                  <TableRow className={classes.tableRow} hover key={project.id} >

                    <TableCell>
                      <div className={classes.nameContainer}>
                        <div className={classes.imageContainer}>
                          <img alt="Project" className={classes.image} src={project.imageUrl} />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                    <TableRow align="left"><Typography variant="h5">{project.title}</Typography></TableRow>
                    <TableRow align="left"><Typography variant="h6">{project.description}</Typography></TableRow>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={projects.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50]}
        />
      </CardActions>
    </Card>
  );
};

ProjetcsTable.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default ProjetcsTable;
