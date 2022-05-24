import React from "react";
import Link from "next/link";
import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import millify from "millify";
import DefaultImage from '../assets/house.jpg';
export const Property = ({
  property: {
    externalID,
    coverPhoto,
    price,
    rentFrequency,
    agency,
    title,
    baths,
    rooms,
    area,
    isVerified,
  },
}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex
        flexWrap="wrap"
        p={5}
        w={420}
        justifyContent="flex-start"
        cursor="pointer"
      >
        <Box>
          <Image w={400} h={260} src={coverPhoto ? coverPhoto.url : DefaultImage} alt={"house"} />
        </Box>
        <Box w="full">
          <Flex
            paddingTop={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Box paddingRight={3} color="green.500">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                AED {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={agency?.logo?.url} />
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            w={250}
            color="blue.400"
          >
            {rooms}
            <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </Flex>
          <Text fontSize="lg">
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};
