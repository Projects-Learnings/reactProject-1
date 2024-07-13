import './Title.css'
export default function Title(t) {
    const obj = t.title
    console.log(t.title)
    return (
        <div className="title-block">
            <h1 className="title">{obj.title}</h1>
            <br/>
            <h2 className="subTitle">{obj.subtitle}</h2>
        </div>
    )
}