import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50%',
      height: '100%',
    },
    cardHeader: {
      maxWidth: '100%',
    },
    card: {
      maxWidth: '250%',
    },
  },
}));

export default function LoginForm() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.cardHeader}>
        <CardHeader>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Login
            </Typography>
          </CardContent>
        </CardHeader>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField required id="standard-required" label="Usuário" defaultValue="Usuário" />
            </div>
            <div>
              <TextField required id="standard-disabled" label="Senha" defaultValue="Senha" />
            </div>
          </form>
        </CardContent>
        <CardActions>
          <Button>Entrar</Button>
        </CardActions>
      </Card>
    </div>
  );
}
