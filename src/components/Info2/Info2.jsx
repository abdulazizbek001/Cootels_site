import '../Hero/Hero.css';
import '../Info/Info.css';
import InfoImg2 from "../../assets/img/info-img2.jpg";


function Info2() {
    return (
        <>
            <section className="info info2">
                <img src={InfoImg2} alt="info-img" width={384} height={384} />
                <div>
                    <h3 className='hero_title hero_title2'>100% Organic Food</h3>
                    <p className='hero_text hero_text2'>We served 100% organic, low process and delicious food. We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Info2