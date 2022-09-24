import { Box, Heading, HStack, IconButton, Link, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';
import GitHubIcon from '@/components/icon/GitHub';

type LinkItemProps = {
  href: string;
  path: string;
  children: React.ReactNode;
};
const LinkItem = ({ href, path, children }: LinkItemProps) => {
  const active = path === href;
  return (
    <NextLink href={href}>
      <Link bg={active ? '#2e3039' : ''} fontSize='lg' fontWeight='bold' borderRadius={2} px={12} py={2}>
        {children}
      </Link>
    </NextLink>
  );
};

type Props = {
  path: string;
};
const Header = ({ path }: Props) => {
  return (
    <Box as='header' px={24} py={12}>
      <HStack>
        <NextLink href='/'>
          <a>
            <Heading as='h1' color='#56A4EC' px={4} py={2} fontSize='xx-large'>
              Shun Blog
            </Heading>
          </a>
        </NextLink>
        <Spacer />
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
        <IconButton aria-label='Go Github Page' icon={<GitHubIcon />} size='lg' />
      </HStack>
    </Box>
  );
};

export default Header;
