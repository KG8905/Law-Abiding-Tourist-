import { Box } from "@mui/material";
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
    <Page isProtected={true} headContent={headContent}>
      <div>Selection</div>
      {laws.map(function(law) {
        return <Box sx={{display: "flex", flexDirection: "column", gap: 2, m:10}}> 
          <div>{law.title}</div>
          <div>{law.location}</div>
          <div>{law.category}</div>
          <div>{law.description}</div>
          <div>{law.source}</div>
          <div>{law.comments.map(function(comment){return <div>{comment.userName} ,{comment.commentText}</div>})}</div>
          </Box>
      })}

    </Page>
  );
}
