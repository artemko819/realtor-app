import { Box } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { HouseCard } from "../components/HouseCard";
import { rentBannerText, bayBannerText } from "../utils/bannerText";
import { fetchApi } from "../utils/fetchApi";

export default function Home({ propertyForSale, propertyForRent }) {
  return (
    <Box>
      <Banner {...rentBannerText} />
      <HouseCard propertyForRent={propertyForRent} />
      <Banner {...bayBannerText} />
      <HouseCard propertyForSale={propertyForSale} />
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    }
  };
  
}
