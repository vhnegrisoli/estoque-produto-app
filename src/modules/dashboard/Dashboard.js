import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
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
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  paperBlue: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main,
  },
  paperGreen: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.success.main,
  },
  paperRed: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.error.main,
  },
  typography: {
    color: '#fff',
  },
}));

const doughnutData = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(1,999,10,0.2)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(150,999,10,0.2)',
      hoverBorderColor: 'rgba(10,100,100,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Finalizados',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'Cancelados',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(800,113,250,2)',
      borderColor: 'rgba(667,112,133,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [55, 88, 10, 15, 43, 99, 20],
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
              <Paper className={classes.paperBlue}>
                <Typography variant="h6" className={classes.typography}>
                  Total de Produtos
                </Typography>
                <Typography variant="h3" className={classes.typography}>
                  <strong>15</strong>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paperGreen}>
                <Typography variant="h6" className={classes.typography}>
                  Produtos Ativos
                </Typography>
                <Typography variant="h3" className={classes.typography}>
                  <strong>9</strong>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paperRed}>
                <Typography variant="h6" className={classes.typography}>
                  Produtos Inativos
                </Typography>
                <Typography variant="h3" className={classes.typography}>
                  <strong>6</strong>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paperGreen}>
                <Typography variant="h6" className={classes.typography}>
                  Pedidos Finalizados
                </Typography>
                <Typography variant="h3" className={classes.typography}>
                  <strong>4</strong>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paperRed}>
                <Typography variant="h6" className={classes.typography}>
                  Pedidos Cancelados
                </Typography>
                <Typography variant="h3" className={classes.typography}>
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
                      data={lineData}
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
                    <Doughnut
                      data={doughnutData}
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
