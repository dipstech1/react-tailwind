
interface IButton {
    type: 'submit' | 'button';
    text: string;
    onClick?: () => void;
    children? : React.ElementType
    btnType ?: 'primary' | 'secondary';
}

const Button = ({ type = 'button', onClick, text,btnType }: IButton) => {

    const btnTypeClass = btnType == 'primary' ? 'btn-primary' : 'btn-secondary'

    return (
        <>
            <button className={`btn ${btnTypeClass}`} onClick={onClick} type={type}>
                {text}
            </button>
        </>
    )
}

export default Button