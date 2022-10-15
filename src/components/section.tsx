import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// https://qiita.com/knjname/items/403d5d77bdc96c088e24
// shouldForwardPropを使うことで存在しない属性(カスタム属性)を利用することができる。
// emotinoのstyledComponentはis-prop-validという実装に従って、HTMLに無さそうな属性は自動的に消してくれる。
//
// propにはHTMLに指定した属性が順番にすべてわたってくる。
// 属性をshouldForwardPropに渡し使用できる属性であればtrueを返す。
// 存在しないものはfalseが帰るので無視される。
// 無視されたくない場合は、自身でテストコード(検証コード)を書いてtrueを返すようにする。
// 例えばdivに"transition"はないため、shouldForwardProp(prop) || prop === 'transition';とする。後半のprop === 'transition'がテストコードで、
// trantionの場合のみ無視せずに利用できるようにする。
const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
    // return shouldForwardProp(prop) || ['transition', 'transitionDuration', 'transitionDelay'].includes(prop);
  },
});

type Props = {
  children: ReactNode;
  delay?: string;
};
const Section = ({ children, delay = '0s' }: Props) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={`0.8s ${delay} ease-out`}
    // transitionDuration='0.8s'
    // transitionDelay={delay}
  >
    {children}
  </StyledDiv>
);

export default Section;
