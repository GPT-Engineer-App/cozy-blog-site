import { Box, Container, Flex, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Box as="header" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">My Personal Blog</Heading>
            <Flex as="nav">
              <Link as={RouterLink} to="/" px={2} color="white">Home</Link>
              <Link as={RouterLink} to="/about" px={2} color="white">About</Link>
              <Link as={RouterLink} to="/contact" px={2} color="white">Contact</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Container as="main" maxW="container.lg" py={8}>
        <VStack spacing={4} align="start">
          <Heading as="h2" size="md">Welcome to My Blog</Heading>
          <Text>This is a placeholder for blog posts. Stay tuned for updates!</Text>
        </VStack>
      </Container>

      <Box as="footer" bg="brand.900" color="white" py={4} mt={8}>
        <Container maxW="container.lg">
          <Text textAlign="center">© 2023 My Personal Blog. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;