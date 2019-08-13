import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const FormValidation = (rules) => {

    function generateValidationList() {

    }

    function generateMeter() {

    }

    return (
      <>

      </>
    )
}

FormValidation.propTypes = {
  rules: PropTypes.shape({
      rule: PropTypes.string,
      condition: PropTypes.bool
  }).isRequired
}
