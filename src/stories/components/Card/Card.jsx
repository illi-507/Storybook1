import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

/**
 * Lo-fi cards (at the moment)
 */

function Card({ variant, children, ...rest }) {
  let background;
  let color;
  let width;
  let height;
  let border;
  let paddingTop;
  let borderRadius;
  let boxShadow;
  let isGroupCard;

  if (variant === 'sm') {
    background = '#E4DDDD';
    color = background;
    width = '210px';
    height = '210px';
  } else if (variant === 'md') {
    background = '#E4DDDD';
    color = background;
    width = '325px';
    height = '325px';
  } else if (variant === 'lg') {
    background = '#E4DDDD';
    color = background;
    width = '440px';
    height = '440px';
  } else if (variant === 'group') {
    background = '#FFFFFF';
    color = '#E4DDDD';
    boxShadow = '0px 6px 22px #0000001D';
    borderRadius = '30px';
    paddingTop = '72px';
    border = '1px solid #C7C7C7';
    isGroupCard = true;
    width = '440px';
    height = '391px';
  }

  return (
    <Box
      background={background}
      width={width}
      height={height}
      boxShadow={boxShadow}
      borderRadius={borderRadius}
      isTruncated
      {...rest}
    >
      {isGroupCard && (
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Box paddingTop={paddingTop} />
          <Box width={width} height="175px" background={color} border={border} />
          <Box display="flex" justifyContent="flex-start" flexDirection="row">
            <Box width="220px" height="144px" background={color} border={border} />
            <Box width="220px" height="144px" background={color} border={border} />
          </Box>
        </Box>
      )}
    </Box>
  );
}

Card.propTypes = {
  variant: PropTypes.oneOf(['sm', 'md', 'lg', 'group']).isRequired,
  /**
   * Chldren should contain image
   */
  children: PropTypes.string,
};

export default Card;