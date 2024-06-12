import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Box bg="brand.700" color="white" px={4} py={2}>
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg">
          My Blog
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" px={2}>
            About
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;