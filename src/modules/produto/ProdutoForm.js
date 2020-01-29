import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
      height: '100%',
    },
    flexGrow: 1,
    card: {
      maxWidth: '100%',
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
}));

export default function ProdutoForm() {
  const classes = useStyles();

  return (
    <div className={classes}>
      <Container fixed>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12}>

          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <h4>
                  <strong><SportsEsportsIcon />{' '}Cadastro de Produtos</strong>
                </h4>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12}>
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
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                    >
                      <MenuItem value="">
                      </MenuItem>
                      <MenuItem value={1}>Livros</MenuItem>
                      <MenuItem value={2}>Jogos</MenuItem>
                      <MenuItem value={3}>Quadrinhos</MenuItem>
                    </Select>
                    <FormHelperText>Selecione qual a categoria do produto</FormHelperText>
                  </FormControl>
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
                <Button color="primary">Salvar Produto</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
