import { Box, Typography, Grid } from "@mui/material";

const About = () => {
    return (
        <Box sx={{ padding: 4 }}>
            <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: "bold", mb: 4 }}
            >
                Best Travel Agency in Gilgit-Baltistan
            </Typography>

            <Grid
                display="flex"
                gap={5}
                alignItems="center"
                justifyContent="space-between"
            >
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src="/src/assets/Neelum-Vally.webp"
                        alt="Gilgit Baltistan Travel"
                        sx={{
                            width: "100%",
                            height: "auto",
                            borderRadius: 2,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                        About Us
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                        We are a professional travel agency based in Gilgit-Baltistan,
                        offering unforgettable travel experiences. Our goal is to provide
                        safe, comfortable, and affordable tours for local and international
                        travelers. We specialize in mountain trips, cultural tours, and
                        adventure travel. Our experienced team ensures high-quality service
                        and customer satisfaction. Travel with us and explore the beauty of
                        northern Pakistan.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;
