import { Box, Typography, Grid } from "@mui/material";

const About = () => {
    return (
        <Box
            sx={{
                width: "100%",
                px: { xs: 2, sm: 4, md: 8 },
                py: { xs: 4, md: 6 },
            }}
        >
            <Typography
                sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: { xs: "20px", sm: "24px", md: "28px" },
                    mb: { xs: 3, md: 5 },
                }}
            >
                Best Travel Agency in Gilgit-Baltistan
            </Typography>

            <Grid
                container
                spacing={4}
                alignItems="center"
            >
                {/* Image */}
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src="/src/assets/Neelum-Vally.webp"
                        alt="Travel"
                        sx={{
                            width: "100%",
                            height: { xs: "220px", sm: "300px", md: "360px" },
                            objectFit: "cover",
                            borderRadius: 2,
                        }}
                    />
                </Grid>

                {/* Text */}
                <Grid item xs={12} md={6}>
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: "22px", sm: "26px", md: "30px" },
                            mb: 2,
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        About Us
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "14px", sm: "15px", md: "16px" },
                            lineHeight: 1.8,
                            color: "text.secondary",
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        We are a professional travel agency based in Gilgit-Baltistan,
                        offering unforgettable travel experiences. Our goal is to provide
                        safe, comfortable, and affordable tours for local and international
                        travelers. We specialize in mountain trips, cultural tours, and
                        adventure travel.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;
