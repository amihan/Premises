import React from 'react';


const PizzaBlock = ({title, price, imageUrl,id, pushItem, householdSupport, technicalSupport}) => {

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{title}</h4>
            <div>
                Отв. за хоз.обеспечение: <br/>
                {householdSupport} <br/>
                Отв. за тех.обеспечение: <br/>
                {technicalSupport}
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <button className="button button--outline button--add">
                    <span onClick={() => pushItem(title, price, imageUrl,id)}>Забронировать</span>
                </button>
            </div>
        </div>
    );
};

export default PizzaBlock;