export default function Section({ title, children }) {

    return (

        <div className="col-span-3">

            <h2 className="text-2xl font-semibold mb-4">
                {title}
            </h2>

            <div className="grid grid-cols-3 gap-6">
                {children}
            </div>

        </div>

    )

}