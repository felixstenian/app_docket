import React from 'react'
import PropTypes from 'prop-types'

import { Label, InputContainer, InputStyle, SelectStyle, ErrorMessage, ToolTipContainer, PlusButton } from './styles'

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
  isDisabled,
  toolTip,
  required
}) {
  if (toolTip) {
    toolTip = toolTip.split('\\n').map(str => {
      return (<>{str}<br /></>)
    })
  }

  const newInput = () => {
    if (isDisabled) {
      if (type === 'submit') {
        return (<InputStyle type={type} value={value} onClick={onClick} disabled/>)
      }

      if (
        type === 'text' ||
        type === 'number' ||
        type === 'checkbox'
      ) {
        return (
          <InputStyle type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} onClick={onClick} min={min} disabled/>
        )
      }
    }

    if (
      type === 'text' ||
      type === 'number'
    ) {
      return (
        <InputStyle type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} onClick={onClick} min={min} />
      )
    }

    if (type === 'checkbox') {
      if (value === true) {
        return (
          <InputStyle type={type} name={name} value={value} onChange={onChange} onClick={onClick} checked/>
        )
      }
      return (
        <InputStyle type={type} name={name} value={value} onChange={onChange} onClick={onClick} />
      )
    }

    if (type === 'submit') {
      return (<InputStyle type={type} value={value} onClick={onClick}/>)
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

    if (type === 'selectPlus' && (Object.keys(options).length !== 0)) {
      return (
        <div>
          <SelectStyle name={name} onChange={onChange}>
            {
              options.map((opt, index) => {
                return (
                  <option value={opt} key={index}>{opt}</option>
                )
              })
            }
          </SelectStyle>
          <PlusButton onClick={onClick}>+</PlusButton>
        </div>
      )
    }

    return null
  }

  return (
    <InputContainer>
        <Label>{`${label}: ${required && '*'}`}</Label>
        {newInput()}
        {toolTip ? <ToolTipContainer>?<span>{toolTip}</span></ToolTipContainer> : ''}
        {errorMessage ? <ErrorMessage>*{errorMessage}</ErrorMessage> : ''}
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
  isDisabled: PropTypes.bool,
  toolTip: PropTypes.string,
  required: PropTypes.bool
}
