import React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'


const inputStyle = tv({
    base: "rounded-lg",
    variants: {
        size: {
            sm: "p-1",
            md: "p-2",
            lg: "p-3"
        }
    }
})



// === code before infering type====

// interface InputProps {
//     size: "sm" | "md" | "lg"
// }



// === code after infering type ====

type inputVariant = VariantProps<typeof inputStyle>
export const Input = ({ size }: inputVariant) => {
    return (
        <input type="text" className={inputStyle({ size })} />
    )
}
