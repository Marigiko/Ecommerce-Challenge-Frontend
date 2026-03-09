export default function ErrorMessage({ message }) {

    if (!message) return null

    return (
        <div
            style={{
                background: "#ffe5e5",
                color: "#b00020",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "6px"
            }}
        >
            {message}
        </div>
    )
}