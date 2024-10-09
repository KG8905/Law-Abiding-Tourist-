import * as React from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Page from "../components/Page";
import { Container } from "@mui/material";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../graphql/queries';



const heights = [50, 50, 50, 50, 50, 50, 50, 50, 50];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: '#fff',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const headContent = (
    <>
    <title>Dashboard</title>
    <meta name="description" content="Law." />
    </>
);


const Dashboard = () => {

    const {data} = useQuery(QUERY_ME);
    console.log(data);

    const laws = data?.me.lawsByUser || [];

    return (
        <Page isProtected={false} headContent={headContent}>
            <Container sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Masonry columns={3} spacing={2}>
                    {laws.map(({location, category, source, description, title, _id}) => (
                        <Paper key={_id}>
                            <StyledAccordion sx={{ minHeight: 50 }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>{title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    Category: {category},
                                    Location: {location} <br />,
                                    Source: {source}  <br />,
                                    Description: {description}  <br />
                                </AccordionDetails>
                            </StyledAccordion>
                        </Paper>
                    ))}
                </Masonry>
            </Container>
        </Page>
    );
}

export default Dashboard;