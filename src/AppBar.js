import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Clock from './modules/Clock';
import ListIcon from '@material-ui/icons/List';
import LabelOffIcon from '@material-ui/icons/LabelOff';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ViewListIcon from '@material-ui/icons/ViewList';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  clockTitle: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    textAlign: 'right',
    marginTop: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    textAlign: 'left',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  const usuario = {
    nome: 'Victor Hugo Negrisoli',
    cpf: '103.324.589-54',
    cargo: 'Administrador',
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <ListItem button key="Dashboard">
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/produtos/cadastrar" style={{ textDecoration: 'none' }}>
          <ListItem button key="Novo Produto">
            <ListItemIcon>
              <SportsEsportsIcon />
            </ListItemIcon>
            <ListItemText primary="Novo Produto" />
          </ListItem>
        </Link>
        <Link to="/produtos/listar" style={{ textDecoration: 'none' }}>
          <ListItem button key="Listar Produtos">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Listar Produtos" />
          </ListItem>
        </Link>
        <Divider />
        <Link to={'/categorias/cadastrar'} style={{ textDecoration: 'none' }}>
          <ListItem button key="Nova Categoria">
            <ListItemIcon>
              <LabelOffIcon />
            </ListItemIcon>
            <ListItemText primary="Nova Categoria" />
          </ListItem>
        </Link>
        <Link to="/categorias/listar" style={{ textDecoration: 'none' }}>
          <ListItem button key="Listar Categorias">
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Listar Categorias  " />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/fornecedores/cadastrar" style={{ textDecoration: 'none' }}>
          <ListItem button key="Novo Fornecedor">
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Novo Fornecedor" />
          </ListItem>
        </Link>
        <Link to="/fornecedores/listar" style={{ textDecoration: 'none' }}>
          <ListItem button key="Listar Fornecedores">
            <ListItemIcon>
              <ViewListIcon />
            </ListItemIcon>
            <ListItemText primary="Listar Fornecedores" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/usuarios/cadastrar" style={{ textDecoration: 'none' }}>
          <ListItem button key="Novo Usuário">
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Novo Usuário" />
          </ListItem>
        </Link>
        <Link to="/usuarios/listar" style={{ textDecoration: 'none' }}>
          <ListItem button key="Listar Usuários">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Listar Usuários" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <ListItem button key="Logout">
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Appstock - Estoque de Produtos
          </Typography>
          <Typography className={classes.clockTitle} noWrap>
            <Clock usuario={usuario} />
          </Typography>
          <SwipeableDrawer
            open={state.left}
            onClose={toggleDrawer('left', true)}
            onOpen={toggleDrawer('left', true)}
          >
            {sideList('left')}
          </SwipeableDrawer>
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
