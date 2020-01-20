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
  }
}));

const CustomersTable = props => {
  const { className, customers, ...rest } = props;
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
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>

              <TableHead>
                <TableRow>
                  <TableCell>Kunde</TableCell>
                  <TableCell>Anzahl Projekte</TableCell>
                  <TableCell>PPRV Ordner</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {customers.slice(0, rowsPerPage).map(customer => (
                  <TableRow className={classes.tableRow} hover key={customer.id} >

                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar className={classes.avatar} src={customer.avatarUrl}>{getInitials(customer.name)}</Avatar>
                        <Typography variant="body1">{customer.name}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{customer.amountProjects}</TableCell>
                    <TableCell>{customer.pprvPath}</TableCell>
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
          count={customers.length}
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

CustomersTable.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default CustomersTable;
