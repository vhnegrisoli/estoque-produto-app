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
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ProdutoForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [produto, setProduto] = React.useState({});

  const onChange = e => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes}>
      <Container fixed>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12}></Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <SportsEsportsIcon /> Cadastro de Produtos
                </Typography>
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
                      name="nome"
                      id="standard-required"
                      label="Nome do Produto"
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      name="descricao"
                      id="standard-disabled"
                      label="Descrição do Produto"
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
                    <Select
                      required
                      name="categoriaId"
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      onChange={e => onChange(e)}
                    >
                      <MenuItem value=""></MenuItem>
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
                      name="preco"
                      type="number"
                      defaultValue="0.00"
                      onChange={e => onChange(e)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                </form>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleOpen()} color="primary">
                  Salvar Produto
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paperModal}>
            <h2 id="transition-modal-title">Dados do Produto</h2>
            <p id="transition-modal-description">{JSON.stringify(produto)}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
