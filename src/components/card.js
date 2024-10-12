import './card.css'


export default function Card(props){
    const {number,src,text}=props
    return(
        <div className="card">
            <div className="top">
               <div className="number">{number}</div>
               <img src={src} alt={text}/>
            </div>
            <p>{text}</p>
        </div>
    )
}