function Card({img, cardName, onClick}) {
    return (
        <div className="card" onClick={onClick}>
            <div className="imgContainer"><img src={img}/></div>
            <div className="cardName">{cardName}</div>
        </div>
    );
};

export default Card;