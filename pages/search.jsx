import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import { SearchFilters } from "../components/SearchFilters";
import { fetchApi } from "../utils/fetchApi";
import { HouseCard } from "../components/HouseCard";
import noresult from "../assets/noresult.svg";
import { NotFoundSearch } from "../components/NotFoundSearch";
function Search({ properties }) {
  const [searchFilter, setSearchFilter] = useState(false);
  const router = useRouter();
  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p={2}
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilter((prevFilter) => !prevFilter)}
      >
        <Text>Search property By Filters</Text>
        <Icon paddingLeft={2} w={7} as={BsFilter} />
      </Flex>
      
      {searchFilter && <SearchFilters />}
      
      <Text fontSize="2xl" p={4} fontWeight="bold">
        Properties {router.query.purpose}
      </Text>
      
      <HouseCard properties={properties} />
      <NotFoundSearch properties={properties} />

    </Box>
  );
}

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-sale";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const hitsPerPage = query.hitsPerPage || "50";
  const rentFrequency = query.rentFrequency || "monthly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "10000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const categoryExternalID = query.categoryExternalID || "4";
  const data = await fetchApi(
    `/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&hitsPerPage=${hitsPerPage}&rentFrequency=${rentFrequency}&minPrice=${minPrice}&maxPrice=${maxPrice}&roomsMin=${roomsMin}&bathsMin=${bathsMin}&sort=${sort}&areaMax=${areaMax}`
  );
  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default Search;
