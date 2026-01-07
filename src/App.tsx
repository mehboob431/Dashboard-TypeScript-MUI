import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import DrawerHeader from "./Components/DrawerHeader";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";

const drawerWidth = 240;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: open ? 0 : `-${drawerWidth}px`,
}));

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(() => {
    const saved = localStorage.getItem("sidebarOpen");
    return saved ? JSON.parse(saved) : true;

  });

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(open));
  }, [open]);
  // console.log(open)

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
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Main>
    </Box>
  );
};

export default App;
