import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Page from "../components/Page";
import Grid from '@mui/material/Grid2';
import { Container } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: "0",
        width: "100%",
    },
    buttonDiv: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    button: {
        margin: "0.5rem",
    },
    undecoratedLink: {
        textDecoration: "none",
    },
};



    const headContent = (
        <>
        <title>About</title>
        <meta name="description" content="Law." />
        </>
    );



const About = () => {
    return (
        <Page isProtected={false} headContent={headContent}>
            <Container sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                
                <Grid container spacing={4}>
                    <Grid size={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <AccountCircleIcon sx={{ fontSize: '4rem'}} />
                                </Box>
                                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} gutterBottom variant="h5" component="div">
                                Emmanuel Jatto
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Description
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" style={styles.button} size="small">Share</Button>
                                <a href = "https://github.com/Emmanueljatto">  
                                <Button variant="contained" style={styles.button} size="small">GitHub</Button>
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid size={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <AccountCircleIcon sx={{ fontSize: '4rem'}} />
                                </Box>
                                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} gutterBottom variant="h5" component="div">
                                Jeremy Brown
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Description
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" style={styles.button} size="small">Share</Button>
                                <a href = "https://github.com/JB0341">
                                <Button variant="contained" style={styles.button} size="small">GitHub</Button>
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>    


                    <Grid size={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <AccountCircleIcon sx={{ fontSize: '4rem'}} />
                                </Box>
                                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} gutterBottom variant="h5" component="div">
                                Matthew Comer
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Description
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" style={styles.button} size="small">Share</Button>
                                <a href = "https://github.com/ut463">
                                <Button variant="contained" style={styles.button} size="small">GitHub</Button>
                                </a>
                            </CardActions>
                        </Card>

                    </Grid>

                    <Grid size={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <AccountCircleIcon sx={{ fontSize: '4rem'}} />
                                </Box>
                                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} gutterBottom variant="h5" component="div">
                                Phillip Navarre
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Description
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" style={styles.button} size="small">Share</Button>
                                <a href = "https://github.com/One4TheNation"> 
                                <Button variant="contained" style={styles.button} size="small">GitHub</Button>
                                </a>
                            </CardActions>
                        </Card>

                    </Grid>

                    <Grid size={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <AccountCircleIcon sx={{ fontSize: '4rem'}} />
                            </Box>
                                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} gutterBottom variant="h5" component="div">
                                Shaketa Giles
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Description
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" style={styles.button} size="small">Share</Button>
                                <a href = "https://github.com/KG8905">
                                <Button variant="contained" style={styles.button} size="small">GitHub</Button>
                                </a>
                            </CardActions>
                        </Card>

                    </Grid>

                    <Grid size={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <AccountCircleIcon sx={{ fontSize: '4rem'}} />
                            </Box>
                                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} gutterBottom variant="h5" component="div">
                                Zeke Tinch
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Description
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" style={styles.button} size="small">Share</Button>
                                <a href = "https://github.com/ZekeTinch">
                                <Button variant="contained" style={styles.button} size="small">GitHub</Button>
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>    
                </Grid>
            </Container>
        </Page>
    );
};

export default About;
