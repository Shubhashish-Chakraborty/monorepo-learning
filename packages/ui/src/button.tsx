export const Button = ( {text , onClick}: {
    text: string;
    onClick?: () => void;
} ) => {
    return (
        <div>
            <button onClick={onClick} style={{
                padding: "10px",
                backgroundColor: "azure",
                borderRadius: "5px",
                cursor: "pointer",
            }} >{text}</button>
        </div>
    )
}