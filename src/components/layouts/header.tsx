import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Heading, HStack, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';
import GithubIcon from '@/components/github';
import { colors } from '@/theme/theme';

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
        <Link
          bg={active ? '#2e3039' : ''}
          fontSize='lg'
          fontWeight='bold'
          borderRadius={2}
          px={12}
          py={2}
          transition='all 0.5s ease'
          _hover={{ backgroundColor: colors.blue }}
        >
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
    <Box as='header' px={{ base: 4, lg: 28, xl: 28 }} py={12} id='header'>
      <HStack>
        {/* headline */}
        <NextLink href='/'>
          <Link
            display='block'
            transition='all 0.1s 0s ease'
            _hover={{ textDecoration: 'none', transform: { base: 'rotateZ(5deg)', lg: 'rotateZ(5deg)', xl: 'rotateZ(5deg)' } }}
          >
            <Heading as='h1' color={colors.blue} py={2} fontSize={{ base: 'x-large', lg: 'xx-large', xl: 'xx-large' }}>
              Shun Blog
            </Heading>
          </Link>
        </NextLink>
        <Spacer display={{ base: 'none', lg: 'block', xl: 'block' }} />
        {/* nav */}
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
        {/* icons */}
        <IconButton
          as='a'
          href='https://github.com/hi-lee-mon/shun-blog/tree/develop'
          aria-label='Go to Github'
          variant='outline'
          icon={<GithubIcon />}
          size='lg'
        />
        <Box display={{ base: 'block', lg: 'none', xl: 'none' }}>
          <Menu autoSelect={false}>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} size='lg' variant='outline' aria-label='Options' />
            <MenuList bg={colors.blcak}>
              <NextLink href='/blog' passHref>
                <MenuItem as={Link}>Blog</MenuItem>
              </NextLink>
              <NextLink href='/diary' passHref>
                <MenuItem as={Link}>Diary</MenuItem>
              </NextLink>
              <NextLink href='/about' passHref>
                <MenuItem as={Link}>About</MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
    </Box>
  );
};

export default Header;
