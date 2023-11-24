import React from "react"
import "./style.scss"

const PageMenuM = () => {
    return (
        <div className="main">
            <div className = "logo_main"> 
                <h3 className = "name_logo">Dotka</h3>
                <p className = "priglashenie">Зарядись новым лутом</p>
            </div>

            <article>
            <h2>Дорогие Скины</h2>
            <div className = "spisok_card">
                <div className="card">
                    <a href="/hook" className="a_spisok">
                        <img src="../../../images/shmotki/Дк хук.png" alt="" className = "img_main" />
                        <p className = "card_opisanie">DK Hook</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/tb" className="a_spisok">
                        <img src="../../../images/shmotki/Аркана террор.jpg" alt="" className = "img_main" />
                        <p class = "card_opisanie">Arcane Terrorblade</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/pudge" className="a_spisok">
                        <img src="../../../images/shmotki/Аркана на пуджа.png" alt="" className = "img_main" />
                        <p className = "card_opisanie"> Arcana Pudge</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/bb" className="a_spisok">
                        <img src="../../../images/shmotki/башеры.png" alt="" className = "img_main" />
                        <p className = "card_opisanie">The Bashers Blade</p>
                    </a>
                </div>
            </div>
        </article>
        
        <article className="posled">
            <h2>Подешевле</h2>
            <div className = "spisok_card">
                <div className="card">
                    <a href="/wr" className="a_spisok">
                        <img src="../../../images/shmotki/сет на врку.jpg" alt="" className = "img_main" />
                        <p className = "card_opisanie">Комплект на Windranger</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/lina" className="a_spisok">
                        <img src="../../../images/shmotki/сет на лину.jpg" alt="" className = "img_main" />
                        <p className = "card_opisanie">Комплект на Lina</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/nix" className="a_spisok">
                        <img src="../../../images/shmotki/сет на никса.jpg" alt="" className = "img_main" />
                        <p className = "card_opisanie">Комплект на Nix</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/ursa" className="a_spisok">
                        <img src="../../../images/shmotki/сет на урсу.jpg" alt="" className = "img_main" />
                        <p className = "card_opisanie">Комплект на Ursa</p>
                    </a>
                </div>
            </div>
        </article>
        </div>
    )
}
export default PageMenuM



