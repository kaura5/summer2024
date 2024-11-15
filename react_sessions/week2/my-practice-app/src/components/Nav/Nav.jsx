import "./nav.css";
import Link from "../Link/Link";

// export default function Nav(props){
    export default function Nav(){
    const links =[
        {title: "Home", url: 'https://www.google.com'},
        {title: "About", url: 'https://www.google.com'},
        {title: "Contact Us", url: 'https://www.google.com'}
    ];

    return(
        <nav>
            {links.map((item) => (
                // <a></a>
                <Link key={item.title} item={item} />
            ))}
        </nav>
    )
}