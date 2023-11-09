import { useState } from "react";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import useGameQueryStore from "./store";



function App() {
  const gameQuery = useGameQueryStore();
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav"" aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => gameQuery.setSearchText(searchText)}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => gameQuery.setGenreId(genre.id)}
            selectedGenreId={gameQuery.gameQuery.genreId}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              onSelectPlatform={(platform) => gameQuery.setPlatformId(platform.id)}
              selectedPlatformId={gameQuery.gameQuery.platformId}
            ></PlatformSelector>
            <SortSelector
              onSelectSortOrder={(sortOrder) => gameQuery.setSortOrder(sortOrder)}
              sortOrder={gameQuery.gameQuery.sortOrder as string}
            ></SortSelector>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
