import React from 'react';
import PropTypes from 'prop-types';
import { BgImage } from 'gbimage-bridge';

const PreviewCompatibleBgImage = ({ imageInfo, bgImageClass = '', children }) => {
  const { childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <BgImage
        className={bgImageClass}
        image={image.childImageSharp.gatsbyImageData}
      >
        {children}
      </BgImage>
    );
  }

  if (!!childImageSharp) {
    return (
      <BgImage
        className={bgImageClass}
        image={childImageSharp.gatsbyImageData}
      >
        {children}
      </BgImage>
    );
  }

  if (!!image && typeof image === 'string')
    return (
      <div
        className={bgImageClass}
        style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover' }}
      >
        {children}
      </div>
    );

  return null;
};

PreviewCompatibleBgImage.propTypes = {
  imageInfo: PropTypes.shape({
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
  bgImageClass: PropTypes.string,
};

export default PreviewCompatibleBgImage;
