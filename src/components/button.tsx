import React, { LegacyRef, forwardRef } from 'react';

interface IButtonContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  loadingComponent?: React.ReactNode
}

const ButtonContainer = forwardRef<LegacyRef<HTMLButtonElement> | any, IButtonContainerProps>((_, ref?) => {
  return (
    <button
      ref={ref}
      className={_.className}
      onClick={_.onClick}
      aria-disabled={_?.disabled}
      type={_.type}
      form={_.form}
      disabled={_.loading || _?.disabled}
    >
      {_.loading ? _.loadingComponent : _.children}
    </button>
  );
})

export {
  IButtonContainerProps,
  ButtonContainer
}
