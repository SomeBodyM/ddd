import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        square,
        size = ButtonSize.M,
        children,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls[size]]: true,
    }

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
