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

export default function ProdutoForm() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.cardHeader}>
        <CardHeader>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cadastro de Produto
            </Typography>
          </CardContent>
        </CardHeader>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                required
                id="standard-required"
                label="Nome do Produto"
                defaultValue="Digite o nome do produto"
              />
            </div>
            <div>
              <TextField
                required
                id="standard-disabled"
                label="Descrição do Produto"
                defaultValue="Digite a descrição do produto"
              />
            </div>
            <div>
              <TextField
                id="standard-number"
                label="Preço"
                type="number"
                defaultValue="0.00"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </form>
        </CardContent>
        <CardActions>
          <Button>Salvar Produto</Button>
        </CardActions>
      </Card>
    </div>
  );
}
