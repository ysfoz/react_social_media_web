import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from 'formik'


const styles = makeStyles({
  // material/ui den alinan design lara ayrica stil vermek gerektiginde bu sekilde
  wrapper: {
    marginTop: "5rem",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
});

export default function Signup() {

    const formik = useFormik({
        initialValues: {
          displayName:'',
          email: '',
          password:'',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
console.log(formik)
  const signupStyle = styles(); // yukarda tanimlanan stile ulasabilmak icin bir degiskene atadik.
  return (
    <Container className={signupStyle.wrapper} maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              name='displayName'
              label="Display Name"
              variant="outlined"
              fullWidth
              value={formik.values.displayName}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              name='email'
              label="Email"
              variant="outlined"
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              name='password'
              label="Password"
              type='password'
              variant="outlined"
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              SignUp with Google
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
