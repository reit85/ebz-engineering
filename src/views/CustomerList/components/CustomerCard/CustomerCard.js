import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, CardHeader } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 200,
    width: '100%',
    margin: '0 auto',

    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '90%',
    height: '90%',
    objectFit: 'contain'
  },
  cardHeader: {
    paddingBottom: 0
  }
}));

const CustomerCard = props => {
  const { className, customer, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
        <CardHeader 
            className={classes.cardHeader}
            title={customer.name}
            subheader={customer.amountProjects + ' Projekte'}  //TODO: correct coditional rendering
        />
        
        <CardContent>
            <div className={classes.imageContainer}>
                <img className={classes.image} alt="Customer Logo" src={customer.avatarUrl} />
            </div>
        </CardContent>
    </Card>
  );
};

CustomerCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default CustomerCard;
