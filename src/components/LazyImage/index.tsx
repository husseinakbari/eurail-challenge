/* eslint-disable react/jsx-props-no-spreading */
import { ImgHTMLAttributes, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ImageIcon } from 'components/Icons';
import './styles.scss';

function LazyImage({
  src,
  alt,
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (src) {
      // Wait till image load
      const img = new Image();
      img.src = src;
      setImageSrc('');
      img.onload = () => {
        setImageSrc(src);
      };
    }
  }, [src]);

  const lazyImageClassName = classNames('lazyImage', className);

  return (
    <div className={lazyImageClassName}>
      {imageSrc ? (
        <img src={imageSrc} alt={alt} {...props} />
      ) : (
        <ImageIcon data-testid="image-placeholder" width={22} height={22} />
      )}
    </div>
  );
}

export default LazyImage;
