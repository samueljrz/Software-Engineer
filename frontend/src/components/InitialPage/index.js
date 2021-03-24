import React from 'react';
import { Component } from 'react';
import Link from '@material-ui/core/Link';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import image from '../../assets/logo250.png'

import styles from './styles';

class InitialPage extends Component {
	constructor(props) {
		super(props);

  }

	render() {
    return (
     <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <img src={image} alt="logo" />
          </Link>
          <div className={styles.btncontainer}>
            <Link href="/signin">
              <Button edge="end" color="white">SignIn</Button>
            </Link>
            <Link href="/signup">
              <Button edge="end" color="#333">SignUp</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
     </div>
		);
	}
}

export default withStyles(styles)(InitialPage);