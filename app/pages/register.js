import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  },
  title:{
    margin: theme.spacing(1)
  }
}));

const register = () => {
  console.log("REGISTER");
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2: ''
  })
  const {name, email, password, password2} = formData
  const handleOnChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleOnSubmit=(e)=>{
    e.preventDefault()
    if(password !== password2){
      
      console.log('password do not match')
    } else{
      console.log(formData)
    }
    
  }
  return (
    <Container>
            <Typography variant="h4" className={classes.title}>
        Register
      </Typography>
      <form className={classes.container} noValidate autoComplete="off"
      onSubmit={e=>handleOnSubmit(e)}>
        <TextField
          fullWidth
          label="Name"
          className={classes.textField}
          type="text"
          name="name"
          margin="normal"
          variant="outlined"
          value={name}
          onChange={(e)=>handleOnChange(e)}
        />
        <TextField
          fullWidth
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e)=>handleOnChange(e)}
        />
        <TextField
          fullWidth
          label="Password"
          className={classes.textField}
          type="password"
          name="password"
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e)=>handleOnChange(e)}
        />
        <TextField
          fullWidth
          label="Confirm password"
          className={classes.textField}
          type="password"
          name="password2"
          margin="normal"
          variant="outlined"
          value={password2}
          onChange={(e)=>handleOnChange(e)}
        />
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.button}
          type='submit'
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};
register.getInitialProps = async cenas => {
  // const res = await axios.get(
  //   `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  // );
  // const { data } = res;
  // return { ...query, comments: data };
  console.log(cenas);
};

export default register;
