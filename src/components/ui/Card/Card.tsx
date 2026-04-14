import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.css';

type CardProps = {
  children: ReactNode;
  /** `media` — карточка с изображением/кастомным содержимым, без паддингов */
  variant?: 'default' | 'accent' | 'media';
  /** Отключает hover-анимацию (для статичных карточек, например отзывов) */
  hoverable?: boolean;
  /** Какой HTML-элемент рендерить */
  as?: ElementType;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, 'className' | 'children'>;

export default function Card({
  children,
  variant = 'default',
  hoverable = true,
  as: Tag = 'div',
  className = '',
  ...rest
}: CardProps) {
  const classes = [
    styles.card,
    variant !== 'media' && styles.padded,
    variant === 'accent' && styles.accent,
    hoverable && styles.hoverable,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
