import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { HorizontalBar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      paddingTop: theme.spacing(2),
      width: '100%',
      height: '100%',
    },
    flexGrow: 1,
    card: {
      maxWidth: '100%',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

export default function ProdutoForm() {
  const classes = useStyles();

  return (
    <div className={classes}>
      <Container fixed>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>
                Total de Produtos
                <Typography variant="h3">
                  <strong>15</strong>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                Produtos Ativos
                <Typography variant="h3">
                  <strong>9</strong>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                Produtos Inativos
                <Typography variant="h3">
                  <strong>6</strong>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                Pedidos Cancelados
                <Typography variant="h3">
                  <strong>4</strong>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                Pedidos Finalizados
                <Typography variant="h3">
                  <strong>22</strong>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <Card>
                <CardHeader>
                  <Paper className={classes.paper}>
                    Gráfico de Barra - Total de Pedidos por Mês
                  </Paper>
                </CardHeader>
                <CardContent>
                  <Grid direction="row" spacing={3} justify="center" alignItems="center">
                    <Bar
                      data={data}
                      width={'100%'}
                      height={350}
                      options={{
                        maintainAspectRatio: false,
                      }}
                    />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs>
              <Card>
                <CardHeader>
                  <Paper className={classes.paper}>
                    Gráfico de Linha Dupla - Total de Pedidos Finalizados e Cancelados por Mês
                  </Paper>
                </CardHeader>
                <CardContent>
                  <Grid direction="row" spacing={3} justify="center" alignItems="center">
                    <Line
                      data={data}
                      width={'100%'}
                      height={350}
                      options={{
                        maintainAspectRatio: false,
                      }}
                    />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <Card>
                <CardHeader>
                  <Paper className={classes.paper}>
                    Gráfico de Pizza - Total de Produtos por Categorias
                  </Paper>
                </CardHeader>
                <CardContent>
                  <Grid direction="row" spacing={3} justify="center" alignItems="center">
                    <Pie
                      data={data}
                      width={'100%'}
                      height={350}
                      options={{
                        maintainAspectRatio: false,
                      }}
                    />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs>
              <Card>
                <CardHeader>
                  <Paper className={classes.paper}>
                    Gráfico de Barra Horizontal - Frequência de Cancelamento e Finalzações Por Mês
                  </Paper>
                </CardHeader>
                <CardContent>
                  <Grid direction="row" spacing={3} justify="center" alignItems="center">
                    <HorizontalBar
                      data={data}
                      width={'100%'}
                      height={350}
                      options={{
                        maintainAspectRatio: false,
                      }}
                    />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
