import React from 'react'
import { alpha, Box, IconButton, InputBase, Stack, styled, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from "@mui/material";
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            // @ts-ignore
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function TopBar({ open, handleDrawerOpen, setMode }) {
    const theme = useTheme();
    return (
        <AppBar position="fixed"
            // @ts-ignore
            open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={[
                        {
                            marginRight: 5,
                        },
                        open && { display: 'none' },
                    ]}
                >
                    <MenuIcon />
                </IconButton>


                <Stack direction={"row"} sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    {/* <Box>
                       
                    </Box> */}
                    <Box sx={{ width: "50%" }}>
                        <Search sx={{ width: "100%", borderRadius: "20px" }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                sx={{ width: "100%" }}
                            />
                        </Search>
                    </Box>
                    <Box>

                        {
                            true ?
                                (<IconButton color="inherit"
                                    onClick={() => {
                                        localStorage.setItem(
                                          "currentMode",
                                          theme.palette.mode === "dark" ? "light" : "dark"
                                        );
                                        setMode((prevMode) =>
                                          prevMode === "light" ? "dark" : "light"
                                        );
                                      }}
                                >
                                    <LightModeIcon />
                                </IconButton>)
                                : (<IconButton color="inherit"
                                    onClick={() => {
                                        localStorage.setItem(
                                          "currentMode",
                                          theme.palette.mode === "dark" ? "light" : "dark"
                                        );
                                        setMode((prevMode) =>
                                          prevMode === "light" ? "dark" : "light"
                                        );
                                      }}
                                >
                                    <BedtimeIcon />
                                </IconButton>)
                        }

                        <IconButton color="inherit">
                            <NotificationsIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <SettingsIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <PersonIcon />
                        </IconButton>
                    </Box>

                    {/* {theme.palette.mode === "light" ? (
                        <IconButton
                            onClick={() => {
                                localStorage.setItem(
                                    "currentMode",
                                    theme.palette.mode === "dark" ? "light" : "dark"
                                );
                                setMode((prevMode) =>
                                    prevMode === "light" ? "dark" : "light"
                                );
                            }}
                            color="inherit"
                        >
                            <LightModeOutlinedIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            onClick={() => {
                                localStorage.setItem(
                                    "currentMode",
                                    theme.palette.mode === "dark" ? "light" : "dark"
                                );
                                setMode((prevMode) =>
                                    prevMode === "light" ? "dark" : "light"
                                );
                            }}
                            color="inherit"
                        >
                            <DarkModeOutlinedIcon />
                        </IconButton>
                    )}

                    <IconButton color="inherit">
                        <NotificationsOutlinedIcon />
                    </IconButton>

                    <IconButton color="inherit">
                        <SettingsOutlinedIcon />
                    </IconButton>

                    <IconButton color="inherit">
                        <Person2OutlinedIcon />
                    </IconButton> */}
                </Stack>



            </Toolbar>
        </AppBar>
    )
}

export default TopBar
