import React from 'react'

import PropTypes from 'prop-types'

import './store-banner.css'

const StoreBanner = (props) => {
  return (
    <div className="store-banner-store-banner">
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="store-banner-image"
      />
    </div>
  )
}

StoreBanner.defaultProps = {
  image_alt1: 'image',
  image_src1: '/playground_assets/google-play-badge-200h.png',
}

StoreBanner.propTypes = {
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
}

export default StoreBanner
