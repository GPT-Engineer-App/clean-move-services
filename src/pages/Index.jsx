// Complete the Index page component for a cleaning company website
import { Box, Container, Heading, Text, Image, List, ListItem, ListIcon, VStack } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={4}>Välkommen till Vår Städfirma</Heading>
          <Text fontSize="xl">Vi erbjuder professionella städtjänster för alla dina behov: flyttstäd, storstäd och fönsterputsning.</Text>
          <Image src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNlcnZpY2V8ZW58MHx8fHwxNzEzODg4NDcyfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mt={4} />
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={4}>Våra Tjänster</Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Flyttstädning - Fullständig rengöring av din gamla eller nya bostad.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Storstädning - Grundlig rengöring av hela ditt hem.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Fönsterputsning - Klar och streckfri utsikt.
            </ListItem>
          </List>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={4}>Prislista</Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Flyttstädning - från 1500 kr
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Storstädning - från 1200 kr
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Fönsterputsning - från 400 kr
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
