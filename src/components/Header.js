import React from 'react';
import logo from '../images/logo.png';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';

import OpenFilter from './OpenFilter';

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar className={classes.nav} position='static'>
			<Container maxWidth='lg' className={classes.container}>
				<Toolbar className={classes.navWrapper}>
					<div className={classes.logo}>
						<img src={logo} alt='logo' />
					</div>
					<OpenFilter />
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;

const useStyles = makeStyles({
	container: {
		'@media(max-width:767px)': {
			paddingLeft: '5px',
			paddingRight: '5px',
		},
	},
	nav: {
		background: 'transparent',
		padding: ' 1.5rem 2rem',
		boxShadow: 'none',
		'@media(max-width:767px)': {
			paddingLeft: '5px',
			paddingRight: '5px',
		},
	},

	navWrapper: {
		justifyContent: 'space-between',
		'@media(max-width:767px)': {
			display: 'block',
			paddingLeft: '5px',
			paddingRight: '5px',
			textAlign: 'center',
		},
	},
	logo: {
		'@media(max-width:767px)': {
			marginBottom: '3rem',
			textAlign: 'left',
		},
	},
});
