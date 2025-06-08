export const InputBox = ( {type , placeholder}: {
    type: string;
    placeholder: string;
}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} style={ {
                padding: "10px",
                textAlign: 'center',
                borderRadius: "10px",
                border: "3px solid red",
                fontWeight: "bolder",
            } } />
        </div>
    )
}