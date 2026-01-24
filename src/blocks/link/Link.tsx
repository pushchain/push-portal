import { FC } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { TransformedHTMLAttributes } from '../Blocks.types';
import { Text, TextProps } from '../text';

type BaseLinkProps = {
  css?: FlattenSimpleInterpolation;
  textProps?: TextProps;
  isText?: boolean;
};

export type LinkProps = BaseLinkProps &
  TransformedHTMLAttributes<HTMLAnchorElement> &
  (
    | (RouterLinkProps & { to: string })
    | { href: string; target?: string; rel?: string }
  );

const isExternalLink = (props: LinkProps): props is BaseLinkProps & { href: string; target?: string; rel?: string } => {
  return 'href' in props;
};

const isExternalUrl = (url: string): boolean => {
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//');
};

const StyledLink = styled(RouterLink)<BaseLinkProps & RouterLinkProps>`
  /* Link CSS */

  text-decoration: none;

  &:hover > * {
    color: ${({ isText }) => (isText ? 'var(--text-brand-medium)' : '')};
  }

  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const StyledExternalLink = styled.a<BaseLinkProps>`
  /* Link CSS */

  text-decoration: none;

  &:hover > * {
    color: ${({ isText }) => (isText ? 'var(--text-brand-medium)' : '')};
  }

  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const Link: FC<LinkProps> = ({ textProps, isText = true, children, ...props }) => {
  // Default to span for inline rendering
  const mergedTextProps = { as: 'span' as const, ...textProps };

  // Handle explicit href prop (external link)
  if (isExternalLink(props)) {
    const { css: cssProp, href, target = '_blank', rel = 'noopener noreferrer', ...rest } = props;
    return (
      <StyledExternalLink
        isText={isText}
        css={cssProp}
        href={href}
        target={target}
        rel={rel}
        {...rest}
      >
        {isText ? <Text {...mergedTextProps}>{children}</Text> : children}
      </StyledExternalLink>
    );
  }

  // Handle external URL passed to `to` prop
  const { css: cssProp, to, ...rest } = props as BaseLinkProps & RouterLinkProps;
  if (typeof to === 'string' && isExternalUrl(to)) {
    return (
      <StyledExternalLink
        isText={isText}
        css={cssProp}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {isText ? <Text {...mergedTextProps}>{children}</Text> : children}
      </StyledExternalLink>
    );
  }

  // Internal link - use React Router
  return (
    <StyledLink isText={isText} css={cssProp} to={to} {...rest}>
      {isText ? <Text {...mergedTextProps}>{children}</Text> : children}
    </StyledLink>
  );
};

Link.displayName = 'Link';

export { Link };
