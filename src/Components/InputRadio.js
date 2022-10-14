
const InputRadio = ({ value, label, name, setValue, property }) => {
    return (
        <>
            <input
                type="radio"
                value={value}
                checked={property === label}
                name={name}
                onChange={setValue}
            />
            <span className="m-2">{label}</span>
        </>
    )
}

export default InputRadio