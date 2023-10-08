import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  alpha,
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  styled,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import InputBase from "@mui/material/InputBase";
import * as React from "react";
import logoInmobiliaria from "./../img/inmobiliariaLogo.jpg";

const pages = ["Inicio", "Nosotros", "Arrendatario", "Pagar arriendo"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function MainAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" enableColorOnDark>
        <Container maxWidth="xl">
          <Toolbar>
            <Avatar
              alt="Logo inmobiliaria"
              src={logoInmobiliaria}
              variant="rounded"
              sx={{
                mr: 2,
                width: 100,
                height: 100,
              }}
            />
            <Typography
              variant="h6"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Inmobiliaria
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="medium"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, flexDirection: "row" }}>
              <Buscador />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

function Buscador() {
  return (
    <>
      <InputLabel id="demo-simple-select-label">Arriendo</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={1}
        label="Age"
      >
        <MenuItem value={10}>Arriendo</MenuItem>
        <MenuItem value={20}>venta</MenuItem>
      </Select>
      <InputLabel id="demo-simple-select-label">Tipo de inmueble</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={1}
        label="Age"
      >
        <MenuItem value={10}>Arriendo</MenuItem>
        <MenuItem value={20}>venta</MenuItem>
      </Select>
      <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={1}
        label="Age"
      >
        <MenuItem value={10}>Arriendo</MenuItem>
        <MenuItem value={20}>venta</MenuItem>
      </Select>
    </>
  );
}

export default MainAppBar;
