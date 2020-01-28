import React from 'react';
import { Grid, IconButton, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  project: {
    alignItems: 'center',
    display: 'flex'
  },
  projectCustomerLogo: {
    marginLeft: '10px'
  },
  projectName: {
    marginLeft: '10px'
  },
  projectEditButtom: {
    marginLeft: '10px'
  },
  stats: {
    // marginTop: theme.spacing(2),
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
  },
  device: {
    alignItems: 'left',
    marginLeft: '10px'
    // padding: theme.spacing(1)
  },
  deviceIcon: {
    // color: theme.palette.icon
  }
}));

const SchedulerRow = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Grid container {...rest} className={classes.project}>
      <Grid item className={classes.projectCustomerLogo}>{<Avatar alt={props.row.name} src={props.row.logoUrl} />}</Grid>
      <Grid item className={classes.projectName}>{props.row.name}</Grid>
      <Grid item className={classes.editButton}><IconButton><EditIcon fontSize="small" /></IconButton></Grid>
    </Grid>
  )
}

export default SchedulerRow;





// export class SchedulerRow extends React.Component {
//   render() {
//     return (
//       <div 
//       style={
//         {
//           fontWeight: "bold",
//           fontSize: "1.2em",
//           margin: '10px',
//         }
//       }>{
//         this.props.row.name
//         }</div>
//     )
//   }
// }