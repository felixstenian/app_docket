import React from 'react'
import PropTypes from 'prop-types'

import { Label, InputContainer, InputStyle, SelectStyle, ErrorMessage } from './styles'

export function InputComponent ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  onClick,
  options,
  min,
  errorMessage,
  required,
  color,
  colorText
}) {
  const newInput = () => {
    if (
      type === 'text' ||
      type === 'number'
    ) {
      return (
        <InputStyle type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} onClick={onClick} min={min} />
      )
    }

    if (type === 'submit') {
      return (<InputStyle type={type} value={value} onClick={onClick} color={color} colorText={colorText} />)
    }

    if (type === 'select' && (Object.keys(options).length !== 0)) {
      return (
        <SelectStyle name={name} onChange={onChange}>
          {
            options.map((opt, index) => {
              return (
                <option value={opt} key={index}>{opt}</option>
              )
            })
          }
        </SelectStyle>
      )
    }

    return null
  }

  return (
    <InputContainer>
        {label && <Label required={required}>{label}: </Label>}
        {newInput()}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  )
}

InputComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  options: PropTypes.any,
  min: PropTypes.number,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  color: PropTypes.string,
  colorText: PropTypes.string
}
