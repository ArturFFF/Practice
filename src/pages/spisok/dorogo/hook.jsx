import React from "react"
import "../style.scss"

const  PageHook = () => {
    return (
        <div className="main">
            
            <article className="cartochka_tovara">
                <div>
                    <img src= "images/spisok/Дк хук.png" alt="" className="img_site" />
                </div>
                <div className="info">
                    <div className = "tovar">
                        <h2 className="h2_name">КОСМЕТИЧЕСКИЙ ПРЕДМЕТ<br />DK HOOK</h2>
                        <h3 className="h3_tovar">Способы получения:</h3>
                        <p className="p_name">
                        - покупка через площадку STEAM; <br />
                        - перессылка в качестве подарка <br />
                        </p>
                        <h3 className="h3_tovar">Способы оплаты:</h3>
                        <p className="p_name">
                        - безналичный расчет;
                        </p>
                    </div>
                    <div className="price">
                        <p>Цена: 17000р</p>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default PageHook



