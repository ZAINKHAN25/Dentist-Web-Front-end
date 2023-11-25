import { useNavigate } from "react-router-dom";

function App(){
    const navigatTo = useNavigate()
    return (
        <div className="d-flex p-5 m-5 flex-column">
            <h1 style={{color: '#6f11f5', fontSize: '120px'}}>404</h1>
            <h3>Oops, you still haven't found what you looking for?</h3>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <div className="mt-5" onClick={()=>navigatTo('/')}>
                <button style={{border: "none", padding: '15px 20px', borderRadius: "15px", backgroundColor: '#6f11f5', color: 'white', fontSize: '24px'}}><i className="fa-solid fa-arrow-left"></i> Back to Home Page</button>
            </div>
        </div>
    )
}

export default App;