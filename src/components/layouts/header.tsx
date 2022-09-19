import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

type LinkItemProps = {
  href: string;
  path: string;
  children: React.ReactNode;
};
const LinkItem = ({ href, path, children }: LinkItemProps) => {
  // TODO:リンクのアニメーションを作成する
  const active = path === href;
  return (
    <NextLink href={href}>
      <Link color={active ? '#DEDEDE' : '#DEDEDE'} fontSize='16px' fontWeight='bold' px={10}>
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
    <Box as='header' bg='#202023' px={20} py={10} display='flex'>
      <Flex gap={60}>
        <NextLink href='#'>
          <a>
            <Heading as='h1' color='#56A4EC'>
              Shun Blog
            </Heading>
          </a>
        </NextLink>
        <Flex alignItems='center'>
          <LinkItem href='#' path={path}>
            Blog
          </LinkItem>
          <LinkItem href='#' path={path}>
            Dialy
          </LinkItem>
          <LinkItem href='#' path={path}>
            About
          </LinkItem>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
