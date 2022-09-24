import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as='footer' px={{ base: 50, lg: 28, xl: 28 }} py={12}>
      <Box>© 2022, Shunsuke Kameda</Box>
    </Box>
  );
};

export default Footer;
