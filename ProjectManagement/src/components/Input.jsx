export default function Input({label, isTextArea, ...props}) {
    return (
        <p>
            <label htmlFor="dueDate">{label}</label>
            {isTextArea ? <textarea {...props} /> : <input {...props} />}
        </p>
    )
}