export default function MsgBox({userName,textColor}){
    let style = {color: textColor};
    return (
        <h1 style={style}>hello {userName}</h1>
    )
}