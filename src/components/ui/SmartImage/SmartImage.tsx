import { useRef, useState, useEffect } from 'react';
import type { ImgHTMLAttributes } from 'react';
import styles from './SmartImage.module.css';

type Props = ImgHTMLAttributes<HTMLImageElement>;

export default function SmartImage({ className = '', onLoad, ...rest }: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  const classes = [styles.img, loaded && styles.loaded, className]
    .filter(Boolean)
    .join(' ');

  return (
    <img
      ref={ref}
      decoding="async"
      {...rest}
      className={classes}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
    />
  );
}
