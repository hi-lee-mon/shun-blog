import { Heading, Link, List, ListItem, Text } from '@chakra-ui/react';
type H1 = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
type H2 = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
type H3 = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
type Ul = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
type Ol = React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
type Li = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
type P = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
type A = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const MDXComponents = {
  h1: (props: H1) => <Heading as='h1' fontSize='26px' borderBottom={1} borderStyle='dotted' pb={1.5} mt={16} mb={4} {...props} />,
  h2: (props: H2) => <Heading as='h2' fontSize='22px' mt={12} mb={2} {...props} />,
  h3: (props: H3) => <Heading as='h3' fontSize='17px' mt={6} mb={2} {...props} />,
  // h4: (props: any) => <Heading as='h4' size='sm' mt='16' mb='3' {...props} />,
  // h5: (props: any) => <Heading as='h5' size='xs' mt='3' mb='2' {...props} />,
  // h6: (props: any) => <Heading as='h6' size='xs' mt='1' mb='1' {...props} />,
  p: (props: P) => <Text as='p' fontSize='16px' mb={2} {...props} />,
  // pre: (props: any) => <Box fullwi {...props} />,
  ul: (props: Ul) => <List px={8} styleType='disc' {...props} />,
  ol: (props: Ol) => <List as='ol' px={7} styleType='decimal' {...props} />,
  li: (props: Li) => <ListItem fontSize='16px' my={1} {...props} />,
  a: (props: A) => <Link color='#ffc300' {...props}></Link>,
  // image: (props: any) => <Image maxW='100%' {...props} />,
};
