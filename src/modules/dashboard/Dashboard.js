import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Typography from '@material-ui/core/Typography';
import { Doughnut } from 'react-chartjs-2';

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
    formControl: {
        margin: theme.spacing(1),
        minWidth: '100%',
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
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

export default function ProdutoForm() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

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
                                <Doughnut
                                    data={data}
                                    width={100}
                                    height={50}
                                    options={{
                                        maintainAspectRatio: false
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
