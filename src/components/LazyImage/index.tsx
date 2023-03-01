import { FC, ImgHTMLAttributes, useEffect, useState } from "react";
import classNames from "classnames";
import { ImageIcon } from "components/Icons";
import "./styles.scss";

const LazyImage: FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  alt,
  className,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (src) {
      // Wait till image load
      let img = new Image();
      img.src = src;
      setImageSrc("");
      img.onload = () => {
        setImageSrc(src);
      };
    }
  }, [src]);

  const lazyImageClassName = classNames("lazyImage", className);

  return (
    <div className={lazyImageClassName}>
      {imageSrc ? (
        <img src={imageSrc} alt={alt} {...props} />
      ) : (
        <ImageIcon data-testid="image-placeholder" width={22} height={22} />
      )}
    </div>
  );
};

export default LazyImage;
