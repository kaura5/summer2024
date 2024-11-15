import "./header.css";
import Nav from "../Nav/Nav";

export default function Header(props){
    // let ttl = props.title
    return(
        <header className="masterHead">
            <h1>{props.company}</h1>
            {/* <Nav ttl={props.title} /> */}
            <Nav />
        </header>
    )
}