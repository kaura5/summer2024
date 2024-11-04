import "./header.css"

function Header(){
    return(
        <header className="masterhead">
            <h1 className="text-red">This is my React header.</h1>
        </header>
    )
}

function Nav(){
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

// export default Header;
export {Header, Nav};