import React from "react";

import { Link as ReachRouterLink } from "react-router-dom";

import { Container, Article} from './styles/main'


export default function Main({ children, ...restProps }) {
  return <ReachRouterLink {...restProps}>{children}</ReachRouterLink>;
}

Main.Article = function MainArticle({children, ...restProps}) {
  <Article {...restProps}>{children}</Article>
}


// Main.Image = function MainImage({src, ...restProps }) {
//   <Image {...restProps} src={``} />
// };