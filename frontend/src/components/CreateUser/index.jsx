import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TopBar } from '../TopBar/topbar'
import axios from 'axios';

import styles from './styles';

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			phoneNumber: '',
			cpf: '',
			email: '',
			password: '',
			confirmPassword: '',
			errors: [],
			loading: false
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.UI.errors) {
			this.setState({
				errors: nextProps.UI.errors
			});
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		const newUserData = {
			firstName: this.state.firstName,
			phoneNumber: this.state.phoneNumber,
			cpf: this.state.cpf,
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword
		};
		axios
			.post('http://localhost:3333/signup', newUserData)
			.then((response) => {
				localStorage.setItem('AuthToken', `${response.data.token}`);
				this.setState({ 
					loading: false,
				});	
				this.props.history.push('/');
			})
			.catch((error) => {
				this.setState({
					errors: error.response.data,
					loading: false
				});
			});
	};

	render() {
		const { classes } = this.props;
		const { errors, loading } = this.state;
		return (
			<Container component="main" maxWidth="xs">
				<TopBar />
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="cpf"
                    label="CPF"
                    name="cpf"
                    autoComplete="cpf"
                    helperText={errors.firstName}
                    error={errors.firstName ? true : false}
                    onChange={this.handleChange}
                  />
                </Grid>

							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="firstName"
									label="Name"
									name="firstName"
									autoComplete="firstName"
									helperText={errors.firstName}
									error={errors.firstName ? true : false}
									onChange={this.handleChange}
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="phoneNumber"
									label="Phone Number"
									name="phoneNumber"
									autoComplete="phoneNumber"
									pattern="[7-9]{1}[0-9]{9}"
									helperText={errors.phoneNumber}
									error={errors.phoneNumber ? true : false}
									onChange={this.handleChange}
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									helperText={errors.email}
									error={errors.email ? true : false}
									onChange={this.handleChange}
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="current-password"
									helperText={errors.password}
									error={errors.password ? true : false}
									onChange={this.handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									name="confirmPassword"
									label="Confirm Password"
									type="password"
									id="confirmPassword"
									autoComplete="current-password"
									onChange={this.handleChange}
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={this.handleSubmit}
                            disabled={loading || 
                                !this.state.email || 
                                !this.state.password ||
                                !this.state.firstName || 
                                !this.state.cpf || 
                                !this.state.phoneNumber}
						>
							Sign Up
							{loading && <CircularProgress size={30} className={classes.progess} />}
						</Button>
						<Grid container justify="flex-end">
							<Grid item>
								<Link href="/" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		);
	}
}

export default withStyles(styles)(SignUp);