export default function Card({ title, children, className = "" }) {

    return (

        <div className={`bg-white shadow-md rounded-xl p-6 ${className}`}>

            {title && (
                <h2 className="text-lg font-semibold mb-4">
                    {title}
                </h2>
            )}

            {children}

        </div>

    )

}