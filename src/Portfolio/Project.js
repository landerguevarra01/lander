import { Box, Grid } from "@chakra-ui/react";
import React from "react";

function Project() {
  return (
    <>
      <Grid
        gridTemplateColumns="repeat(2,1fr)"
        gridTemplateRows="repeat(2,1fr)"
        justifyItems="center"
        gap={5}
      >
        <Box w="70%" bgColor="red" h="50vh"/>
        <Box w="70%" bgColor="red" h="50vh"/>
        <Box w="70%" bgColor="red" h="50vh"/>
        <Box w="70%" bgColor="red" h="50vh"/>
      </Grid>
    </>
  );
}

export default Project;
