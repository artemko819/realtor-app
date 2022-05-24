import React from "react";
import { Avatar, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { ImageScroolBar } from "../../components/ImageScroolBar";
import { fetchApi } from "../../utils/fetchApi";
import { DescriptionHouse } from "../../components/DescriptionHouse";

export default function PropertyDetails({ propertyDetails }) {
  const { photos } = propertyDetails;
  return (
    <Box maxWidth={1000} m="auto" p={4}>
      {photos.length > 0 ? <ImageScroolBar data={photos} /> : null}
      <DescriptionHouse {...propertyDetails} />
    </Box>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`/properties/detail?externalID=${id}`);
  return {
    props: {
      propertyDetails: data,
    },
  };
}
