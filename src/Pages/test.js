src /
 ├─ app /
 │   ├─ store.ts
 │   └─ hooks.ts
 ├─ features /
 │   └─ cart / cartSlice.ts
 ├─ components /
 │   ├─ Header.tsx
 │   ├─ Sidebar.tsx
 │   ├─ ProductCard.tsx
 │   └─ Footer.tsx
 ├─ pages /
 │   ├─ Home.tsx
 │   ├─ Shop.tsx
 │   ├─ Products.tsx
 │   ├─ About.tsx
 │   └─ Contact.tsx
 ├─ data /
 │   └─ products.ts
 ├─ App.tsx
 └─ main.tsx



import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    name: string;
    price: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;


import { AppBar, Toolbar, IconButton, Typography, Box, Badge, InputBase } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

interface Props {
    onMenuClick: () => void;
}

const Header = ({ onMenuClick }: Props) => {
    const cartCount = useSelector((state: RootState) => state.cart.items.length);

    return (
        <AppBar position="sticky">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <IconButton color="inherit" onClick={onMenuClick}>
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6">My Shop</Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <InputBase placeholder="Search…" sx={{ bgcolor: "white", px: 1, borderRadius: 1 }} />
                    <Badge badgeContent={cartCount} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;


import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
    open: boolean;
    onClose: () => void;
}

const Sidebar = ({ open, onClose }: Props) => {
    const navigate = useNavigate();

    const pages = ["shop", "products", "about", "contact"];

    return (
        <Drawer open={open} onClose={onClose}>
            <List sx={{ width: 250 }}>
                {pages.map((page) => (
                    <ListItemButton
                        key={page}
                        onClick={() => {
                            navigate(`/${page}`);
                            onClose();
                        }}
                    >
                        <ListItemText primary={page.toUpperCase()} />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;


import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

interface Props {
    product: {
        id: number;
        name: string;
        price: number;
        image: string;
    };
}

const ProductCard = ({ product }: Props) => {
    const dispatch = useDispatch();

    return (
        <Card>
            <CardMedia component="img" height="160" image={product.image} />
            <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>${product.price}</Typography>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => dispatch(addToCart(product))}
                >
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;


export const products = [
    { id: 1, name: "Laptop", price: 500, image: "/laptop.jpg" },
    { id: 2, name: "Mobile", price: 300, image: "/mobile.jpg" },
];


import { Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Home = () => {
    return (
        <>
            <Typography variant="h4" textAlign="center" my={3}>
                Featured Products
            </Typography>

            <Grid container spacing={3} px={3}>
                {products.map((p) => (
                    <Grid item xs={12} md={3} key={p.id}>
                        <ProductCard product={p} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Home;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
    const [open, setOpen] = useState(false);

    return (
        <BrowserRouter>
            <Header onMenuClick={() => setOpen(true)} />
            <Sidebar open={open} onClose={() => setOpen(false)} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
