import React from 'react'
import ReactLoading from 'react-loading';
import { PropTypes } from 'prop-types'

export const Loading = ({size, type="spin", color="#e3e3e3"}) => {
  return (
        <ReactLoading
         style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          width:"5%",
          paddingTop: "20%",
        }}
         type={type} color={color} height={667} width={375} />
  )
}

Loading.propTypes = {
  size: PropTypes.oneOf([
    "xs",
    "sm",
    "md",
    "lg"
  ]),
  type: PropTypes.oneOf([
    "blank",
    "balls",
    "bars",
    "bubbles",
    "cubes",
    "cylon",
    "spin",
    "spinningBubbles",
    "spokes"
  ]),
  color: PropTypes.string
}

Loading.defaultProps = {
  size: "sm",
  color: "blue",
  type: "balls"
}
