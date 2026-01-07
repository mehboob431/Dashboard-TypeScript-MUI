import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { LocationOn, Phone, Call, Email } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#1f2937", color: "#fff", py: 6 }}>
            <Container maxWidth="lg">
                <Grid container spacing={20}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Quick Links
                        </Typography>

                        {["Home", "About", "Gallery", "Contact"].map(
                            (item) => (
                                <Typography key={item} mb={1} >
                                    <Link href="#" underline="none" color="gray">
                                        {item}
                                    </Link>
                                </Typography>
                            )
                        )}
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Our Services
                        </Typography>

                        {[
                            "City Sightseeing Tours",
                            "Group & Corporate Tours",
                            "Camping & Hiking Adventures",
                            "Family Travel Packages"
                        ].map((service) => (
                            <Typography key={service} color="gray" mb={1} >
                                {service}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Contact Info
                        </Typography>

                        <Box display="flex" gap={1} mb={1}>
                            <LocationOn color="success" />
                            <Typography color="gray">
                                8-B, Iqbal Avenue Phase 1, Lahore
                            </Typography>
                        </Box>

                        <Box display="flex" gap={1} mb={1}>
                            <Phone color="success" />
                            <Link href="tel:+923214106223" color="gray" underline="none">
                                +92 321 410 6223
                            </Link>
                        </Box>

                        <Box display="flex" gap={1} mb={1}>
                            <Call color="success" />
                            <Link href="tel:+92423518393" color="gray" underline="none">
                                +92 423 5183 937
                            </Link>
                        </Box>

                        <Box display="flex" gap={1}>
                            <Email color="success" />
                            <Link
                                href="mailto:info@pakistantravelplaces.com"
                                color="gray"
                                underline="none"
                            >
                                info@pakistantravelplaces.com
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box
                    mt={5}
                    pt={3}
                    borderTop="1px solid #374151"
                    textAlign="center"
                >
                    <Typography variant="body2" color="gray">
                        © 2026 Pakistan Travel Places. All rights reserved.
                    </Typography>
                    <Typography variant="caption" color="gray">
                        Developed by Ram Stack Solutions
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;