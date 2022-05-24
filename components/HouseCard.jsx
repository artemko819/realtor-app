import { Flex } from "@chakra-ui/react";
import React from "react";
import { Property } from "./Property";

export const HouseCard = ({ propertyForRent, propertyForSale, properties }) => {
  return (
    <Flex flexWrap="wrap">
      {propertyForRent &&
        propertyForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      {propertyForSale &&
        propertyForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      {properties &&
        properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
    </Flex>
  );
};
