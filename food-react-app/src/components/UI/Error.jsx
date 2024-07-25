export default function Error({title, msg, children}){
    <div className="error">
        {children}
        <h2>{title}</h2>
        <p>{msg}</p>
    </div>
}