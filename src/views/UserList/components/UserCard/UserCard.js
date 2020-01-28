import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Button, Card, CardContent, CardHeader, CardActions, Divider, Typography, Grid } from '@material-ui/core';
// import EditIcon from '@material-ui/icons/Edit';
import PhoneIcon from '@material-ui/icons/Phone';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles(theme => ({
  root: {},
  cardHeader: {
    paddingBottom: 0,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  medium: {
    minWidth: '80%'
  },
  ebzBlue: {
      color: '#fff',
      backgroundColor: '#1593d7'
  },
  media: {
    height: 80,
  },
  icon: {
    fontSize: '1.3em',
    color: '#1593d7',
    marginRight: theme.spacing(2)
  },
  spacing: {
    marginBottom: theme.spacing(2)
  }
}));


const UserCard = props => {
  const { className, user, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
        {/* <CardMedia
          className={classes.media}
          image="https://cdn.dribbble.com/users/2977834/screenshots/5864029/minimal_wallpaper_gradient_for_mac_daniel_romero_rmrdnl_2x.jpg"
          title="bg"
        /> */}
        
        <CardHeader
          className={classes.cardHeader}
          avatar={<Avatar className={classes.large} alt={user.name} src={user.avatarUrl} />}
        />
        <CardHeader 
          className={classes.cardHeader}
          title={user.name}
          subheader={user.position}
        />
        
        <CardContent>
          <Grid container>
            <Grid container className={classes.spacing}>
              <PhoneIcon className={classes.icon} />
              <Typography className={classes.medium} variant="body1" color="textSecondary">{user.phone}</Typography>
            </Grid>

            <Grid container className={classes.spacing}>
              <SmartphoneIcon className={classes.icon} />
              <Typography className={classes.medium} variant="body1" color="textSecondary">{user.mobile}</Typography>
            </Grid>

            <Grid container>
              <EmailIcon className={classes.icon} />
              <Typography className={classes.medium} variant="body2" color="textSecondary">{user.email}</Typography>
            </Grid>

          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
            <Button size="small" color="primary">Projekte anzeigen</Button>
      </CardActions>
    </Card>
  );
};

UserCard.propTypes = {
    className: PropTypes.string,
    product: PropTypes.object.isRequired
};

export default UserCard;
