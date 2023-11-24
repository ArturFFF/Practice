import React from "react"
import "./style.scss"
const PageNovosti = () => {
    return (
        <div className="main">
            <div className = "logo_novosti">
                <h3 className = "logo_logo">Новости</h3>
            </div>
            <article>
                <div className="abzac_novosti">
                    <h3>Новинка</h3>
                    <p className="name_abzac">
                       Долгожданный бот уже запущен. Успей залететь первый чтобы получить крутые ништячки.
                    </p>
                </div>
            </article>
            <article>
                <div className="abzac_novosti">
                    <h3>Расширение</h3>
                    <p className="name_abzac">
                    Теперь мы есть в Inst, Tg, и конечно же во Вконтакте
                    </p>
                </div>
            </article>
            <article className="bezOtstupov">
                <div className="abzac_novosti">
                    <h3>Акция</h3>
                    <p className="name_abzac">
                        В честь открытия бота в TELEGRAMM по промокоду "PAPICH" скидка на первую покупку 30%
                    </p>
                </div>
            </article>
        </div>
    )
}
export default PageNovosti



