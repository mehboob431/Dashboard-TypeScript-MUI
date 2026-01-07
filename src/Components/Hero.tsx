
import { Box, Typography, Button, Stack } from "@mui/material";

const Hero = () => {
    return (
        <Box
            sx={{
                position: "relative",
                height: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
            }}
        >
            {/* Background Image */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "url(https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&w=1920)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.4)",
                    }}
                />
            </Box>

            {/* Content */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    px: 2,
                    maxWidth: "900px",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{ mb: 1, letterSpacing: 1 }}
                >
                    The hidden World
                </Typography>

                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: "bold",
                        mb: 4,
                        lineHeight: 1.2,
                        fontSize: { xs: "2.5rem", md: "4rem" },
                    }}
                >
                    Open your eyes to <br /> Deosai Lake
                </Typography>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ px: 4, py: 1.5, fontSize: "1rem" }}
                    >
                        Booking Now
                    </Button>
                </Stack>
            </Box>
        </Box >
    );
};

export default Hero;
