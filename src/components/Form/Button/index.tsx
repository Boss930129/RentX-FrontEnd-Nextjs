import React, {
  ReactNode,
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';

import { CircularProgress } from '@material-ui/core';
import { IntrinsicElementsKeys } from 'styled-components';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children: ReactNode;
  containerClass?: string;
  variant?: 'transparent' | 'red' | 'green' | undefined;
  as?: IntrinsicElementsKeys;
  loading?: boolean;
  loadingSize?: number;
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    children,
    containerClass,
    variant,
    as,
    loading,
    loadingSize,
    ...rest
  }: ButtonProps,
  ref
) => {
  return (
    <S.Container className={containerClass}>
      <S.ButtonComponent
        {...rest}
        variant={variant}
        ref={ref}
        disabled={loading || rest.disabled}
      >
        {loading && <CircularProgress size={loadingSize} color="inherit" />}
        {!loading && children}
      </S.ButtonComponent>
    </S.Container>
  );
};

export const Button = forwardRef(ButtonBase);
