import React from 'react'
import { twMerge } from 'tailwind-merge'

import { tv } from 'tailwind-variants'

const buttonStyle = tv({
    base: 'text-white bg-lime-500 rounded-full active:opacity-80',
    variants: {
        color: {
            primary: "bg-blue-500 text-white",
            secondary: "bg-purple-500 text-white",
            red: "bg-red-300 text-black"
        }
    },
    defaultVariants: {
        color: "primary"
    }
})

// type Buttonvariants = VariantProps<typeof buttonStyle>

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    color?: "primary" | "secondary" | "red"

}

export const Button = ({ color = "primary", children, className, ...props }: ButtonProps) => {
    return (
        <button className={twMerge(buttonStyle({ color }), className)} {...props}>
            {children}
        </button>
    )
}
