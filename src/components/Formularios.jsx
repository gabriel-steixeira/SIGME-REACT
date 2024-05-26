export const InputGroup = (props) => {
    return (
        <>
            <div>
                <label>{props.label}</label>
                <input style={{width: '230px'}} placeholder={props.placeholder} />
            </div>
        </>
    )
}

export const Button = (props) => {
    return(
        <div>
            <button type="submit">{props.texto}</button>
        </div>
    )
}