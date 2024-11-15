import "./link.css";

export default function Link(props){

    // const url = props.item.url;
    // const title = props.item.title;

    // destructuring
    const {url, title} = {...props.item};
    const data = false;

if(data){

    return(
        <a className="navLink" href={url}>{title}</a>
    )
} else {
    return(
        <a className="navLink" href={url}>link</a>
    )
}
}