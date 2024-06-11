import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  // o sinal ? faz com que a propriedade seja opcional 
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return(
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      {...props} // Spread Operator = está pegando cada valor que existe dentro do objeto props e passando como propriedade para a tag img
    />
  );
}