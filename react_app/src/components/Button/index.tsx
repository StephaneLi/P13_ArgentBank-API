import { useState, FunctionComponent, MouseEventHandler, useEffect } from 'react'
import './style.scss'

export enum ButtonStyle {
  CTA,
  NORMAL,
  CANCEL
}

type ButtonProps = {
  label?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  isLoading?: boolean
  style?: ButtonStyle
}

const Button: FunctionComponent<ButtonProps> = ({label='label', onClick = null, isLoading = false, style = ButtonStyle.NORMAL}) => {
  const [loading, setLoading] = useState<boolean>()

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  const getStyleButtonClassName = (style: ButtonStyle): string => {
    switch (style) {
      case ButtonStyle.CTA: 
        return 'button--cta'
      case ButtonStyle.CANCEL: 
        return 'button--cancel'
      default:
        return ''
    }
  }

  return (
    <button data-testid={label} onClick={onClick!} className={`button ${ getStyleButtonClassName(style) } ${loading ? 'button--loading' : ''}`}>
      {label}
    </button>
  );
}

export default Button
