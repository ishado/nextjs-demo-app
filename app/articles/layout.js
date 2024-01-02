export default function ({children}){
    return (
        <div>
            <h1>Nested Layout form Articles</h1>
            <div style={{
                background:"#ae6",
                margin:"15px",
                padding:"15px",
            }}>
                {children}
            </div>
        </div>
    );
}