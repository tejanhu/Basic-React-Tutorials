export default function Heading({color = "gold", text="Hello World!", fontSize}){
    return <h1 style={{color:color, fontSize:fontSize}}>{text}</h1>
}