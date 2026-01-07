import React from "react";
import { Box, CssBaseline, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import DrawerHeader from "../Components/DrawerHeader";

const drawerWidth = 240;

const Main = styled("main", {
    shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: open ? 0 : `-${drawerWidth}px`,
}));

const Home: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <Header
                open={open}
                onDrawerOpen={() => setOpen(true)}
                onMobileMenuOpen={() => setMobileOpen(true)}
            />

            <Sidebar
                open={open}
                mobileOpen={mobileOpen}
                onClose={() => setOpen(false)}
                onMobileClose={() => setMobileOpen(false)}
            />

            <Main open={open}>
                <DrawerHeader />
                {/* <Typography>
                    
                </Typography> */}
            </Main>
        </Box>
    );
};

export default Home;
