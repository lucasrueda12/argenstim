import "./ItemStyle.css";

const Item = ({id, title, description, price, pictureURL}) =>{

    const impPais = 1.30;
    const perpGanancias = 1.45;

    return(
        <div key={`item-${id}`} className="itemContainer">
            <img className="item-img" src={pictureURL} alt="img-prod" />
            <div className="itemTextContainer">
                <h3 className="item-price">{(price* impPais*perpGanancias).toLocaleString("es-AR", {style:"currency", currency:"USD"})}</h3>
                <h2 className="item-title">{title}</h2>
                <p className="item-description">{description}</p>
            </div>
        </div>
    )
}

export default Item;