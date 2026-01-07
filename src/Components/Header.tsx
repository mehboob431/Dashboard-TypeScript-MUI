import React from "react";
import {
    AppBar as MuiAppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    useMediaQuery
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

interface AppBarProps {
    open: boolean;
    onDrawerOpen: () => void;
    onMobileMenuOpen: () => void;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"]),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    }),
}));

const Header: React.FC<AppBarProps> = ({
    open,
    onDrawerOpen,
    onMobileMenuOpen,
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                {!isMobile && (
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={onDrawerOpen}
                        sx={{ mr: 2, ...(open && { display: "none" }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}

                <Typography variant="h6" noWrap>
                    Welcome To Gilgit-Baltistan
                </Typography>

                {isMobile && (
                    <Box sx={{ ml: "auto" }}>
                        <IconButton color="inherit" onClick={onMobileMenuOpen}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
