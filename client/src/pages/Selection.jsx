import { Box, Container} from "@mui/material";
import Page from "../components/Page";
import { QUERY_LAWS } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const headContent = (
  <>
    <title>Change Me! - Home</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Selection() {
  const {loading, data} = useQuery(QUERY_LAWS)
  console.log(data)
  const laws = data?.laws || [];
  return (
    <Page isProtected={true} headContent={headContent} sx={{display: "flex", alignitems: "center",}}>
      <h1>Selection</h1>
      <Container sx={{}}>
        {laws.map(function(law) {
          return <Box sx={{display: "flex", flexDirection: "column", gap: 2, m:4, p:2, backgroundColor:"#3f51b5", border: "2px solid white"}}> 
            <div>{law.title}</div>
            <div>{law.location}</div>
            <div>{law.category}</div>
            <div>{law.description}</div>
            <div>{law.source}</div>
            <div>{law.comments.map(function(comment){return <div>{comment.userName} ,{comment.commentText}</div>})}</div>
            </Box>
        })}
      </Container>
    </Page>
  );
}
