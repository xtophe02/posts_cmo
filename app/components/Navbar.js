import React from "react";
import Link from "../src/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));

const Navbar = () => {
  console.log("NAVBAR");
  const classes = useStyles();
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Grid container justify="space-between">
          <Typography variant="h6" color="inherit">
            <Link color='inherit' href='/'>Home</Link>
          </Typography>
          <Grid justify="space-between">
          <Link href="/developer" color="inherit" underline="none">
            <Button color="inherit" className={classes.button}>
              Developers
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
          </Link>
          <Link href="/auth?req=register" as="/auth/register" color="inherit" underline="none">
            <Button color="inherit" className={classes.button}>
              Register
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
          </Link>
          <Link href="/auth?req=login"  as="/auth/login" color="inherit" underline="none">
            <Button color="inherit" className={classes.button}>
              Login
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
          </Link>
          </Grid>
          
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
