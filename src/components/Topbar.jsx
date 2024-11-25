const Topbar = props => {
    return (
        
            <nav className="topBar">
                <img className ="navLogo" src={props.src} alt={props.alt} />
                <div className = "linkContainer">
                    <a className="firstLink" href="#">{props.first}</a>
                    <a className="secondLink" href="#">{props.second}</a>
                </div>
                
            </nav>
        
    )
}
export default Topbar;