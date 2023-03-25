import { FiltrButton } from "./Button.styled"

export const Button = ({children, selected = false }) => {
    return (
        <FiltrButton selected type="button">
        {children }
     </FiltrButton>
    )
}