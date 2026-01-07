import React from "react";
import {
    Drawer,
    List,
    Divider,
    IconButton,
    ListItemButton,
    ListItemText,
    useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import DrawerHeader from "./DrawerHeader.tsx";

const drawerWidth = 240;
interface SidebarProps {
    open: boolean;
    mobileOpen: boolean;
    onClose: () => void;
    onMobileClose: () => void;
}

const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
];

const Sidebar: React.FC<SidebarProps> = ({
    open,
    mobileOpen,
    onClose,
    onMobileClose,
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const drawerContent = (
        <>
            <DrawerHeader>
                <IconButton onClick={isMobile ? onMobileClose : onClose}>
                    {theme.direction === "ltr" ? (
                        <ChevronLeftIcon />
                    ) : (
                        <ChevronRightIcon />
                    )}
                </IconButton>
            </DrawerHeader>

            <Divider />

            <List>
                {menuItems.map((item) => (
                    <ListItemButton
                        key={item.label}
                        component={NavLink}
                        to={item.path}
                        onClick={onMobileClose}
                        sx={{
                            "&.active": {
                                backgroundColor: "rgba(0,0,0,0.08)",
                            },
                        }}
                    >
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                ))}
            </List>
        </>
    );

    return (
        <>
            {!isMobile && (
                <Drawer
                    variant="persistent"
                    open={open}
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawerContent}
                </Drawer>
            )}

            {isMobile && (
                <Drawer anchor="right" open={mobileOpen} onClose={onMobileClose}>
                    {drawerContent}
                </Drawer>
            )}
        </>
    );
};

export default Sidebar;
