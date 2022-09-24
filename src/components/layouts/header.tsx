import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Heading, HStack, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';
import GithubIcon from '@/components/icon/github';

type LinkItemProps = {
  href: string;
  path: string;
  children: React.ReactNode;
};
const LinkItem = ({ href, path, children }: LinkItemProps) => {
  const active = path === href;
  return (
    <Box display={{ base: 'none', lg: 'block', xl: 'block' }}>
      <NextLink href={href} passHref>
        <Link bg={active ? '#2e3039' : ''} fontSize='lg' fontWeight='bold' borderRadius={2} px={12} py={2}>
          {children}
        </Link>
      </NextLink>
    </Box>
  );
};

type Props = {
  path: string;
};
const Header = ({ path }: Props) => {
  return (
    <Box as='header' px={{ base: 50, lg: 28, xl: 28 }} py={12} id='header'>
      <HStack>
        <NextLink href='/'>
          <a>
            {/* <Heading as='h1' color='#56A4EC' py={2} fontSize='xx-large'> */}
            <Heading as='h1' color='#56A4EC' py={2} fontSize={{ base: 'x-large', lg: 'xx-large', xl: 'xx-large' }}>
              Shun Blog
            </Heading>
          </a>
        </NextLink>
        <Spacer display={{ base: 'none', lg: 'block', xl: 'block' }} />
        <LinkItem href='/blog' path={path}>
          Blog
        </LinkItem>
        <LinkItem href='/diary' path={path}>
          Diary
        </LinkItem>
        <LinkItem href='/about' path={path}>
          About
        </LinkItem>
        <Spacer />
        <Box display={{ base: 'block', lg: 'none', xl: 'none' }}>
          <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} size='lg' variant='outline' aria-label='Options' />
            <MenuList>
              <NextLink href='/' passHref>
                <MenuItem as={Link}>Blog</MenuItem>
              </NextLink>
              <NextLink href='/Diary' passHref>
                <MenuItem as={Link}>Diary</MenuItem>
              </NextLink>
              <NextLink href='/posts' passHref>
                <MenuItem as={Link}>About</MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Box>
        <IconButton aria-label='Go to Github Page' variant='outline' icon={<GithubIcon />} size='lg' />
      </HStack>
    </Box>
  );
};

export default Header;
