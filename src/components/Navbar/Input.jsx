export default function Input ({placeholder, value, onChange}) {

    return <div>
        <input 
            type="text" 
            value={value}
            className="input-class"
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)} 
            />
    </div>
}