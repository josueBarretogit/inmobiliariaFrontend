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
  FormControl,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
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

            <Buscador />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

function Buscador() {
  const [arriendo, setArriendo] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setArriendo(event.target.value as string);
  };

  return (
    <>
      <FormControl>
        <Box sx={{ display: "flex" }}>
          <InputLabel id="demo-simple-select-label">Arriendo</InputLabel>
          <Select
            labelId="inputLabelArriendo"
            id="selectLabelArriendo"
            onChange={handleChange}
            value={arriendo}
            label="Arriendo"
          >
            <MenuItem value={1}>Arriendo</MenuItem>
            <MenuItem value={2}>venta</MenuItem>
          </Select>

          <InputLabel id="demo-simple-select-label">
            Tipo de inmueble
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={1}
            label="Age"
          >
            <MenuItem value={1}>Casa</MenuItem>
            <MenuItem value={3}>Bodega</MenuItem>
            <MenuItem value={4}>Apartamento</MenuItem>
            <MenuItem value={5}>Consultorio</MenuItem>
            <MenuItem value={6}>Oficina</MenuItem>
            <MenuItem value={7}>Local</MenuItem>
          </Select>
          <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={1}
            label="Age"
          >
            <MenuItem value={1}>Bogotá</MenuItem>
            <MenuItem value={3}>Medellin</MenuItem>
            <MenuItem value={4}>Cali</MenuItem>
            <MenuItem value={5}>Cundinamarca</MenuItem>
          </Select>
        </Box>
      </FormControl>
    </>
  );
}

export default MainAppBar;
