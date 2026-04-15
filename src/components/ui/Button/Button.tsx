import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode,
} from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'accent';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps | 'as'> & {
    as?: 'button';
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | 'as'> & {
    as: 'a';
  };

type ButtonAsComponent = CommonProps & {
  as: ElementType;
  [key: string]: unknown;
};

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsComponent;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  as,
  ...rest
}: ButtonProps) {
  const Tag: ElementType = as ?? 'button';

  const classes = [
    styles.button,
    styles[variant],
    size === 'sm' && styles.sizeSm,
    size === 'lg' && styles.sizeLg,
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (Tag === 'button' && !('type' in rest)) {
    (rest as ButtonHTMLAttributes<HTMLButtonElement>).type = 'button';
  }

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
