import React from "react"
import "../style.scss"

const PagePudge = () => {
    return (
        <div className="main">
            
            <article className="cartochka_tovara">
                <div>
                    <img src= "images/spisok/Аркана на пуджа.png" alt="" className="img_site" />
                </div>
                <div className="info">
                    <div className = "tovar">
                        <h2 className="h2_name">КОСМЕТИЧЕСКИЙ ПРЕДМЕТ<br /> ARCANA PUDGE</h2>
                        <h3 className="h3_tovar">Способы получения:</h3>
                        <p className="p_name">
                        - Покупка через площадку STEAM; <br />
                        - Перессылка в качестве подарка; <br />
                        </p>
                        <h3 className="h3_tovar">Способы оплаты:</h3>
                        <p className="p_name">
                        - безналичный расчет;
                        </p>
                    </div>
                    <div className="price">
                        <p>Цена: 7000р</p>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default PagePudge



