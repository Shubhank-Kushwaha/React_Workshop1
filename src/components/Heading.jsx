const Heading = (props)=> {
    return (
    
        <h1> {props.title}</h1>
    
    )
}
const Paragraph = (props)=> {
    return (
        <h2>{props.title}</h2>
    )
}
const Body = (props)=> {
    return <h2> Here Is Body</h2>
}
export {Heading, Paragraph, Body}