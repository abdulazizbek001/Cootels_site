import '../Hero/Hero.css';
import './Info.css';
import InfoImg from "../../assets/img/info-img.jpg";

function Info() {
    return (
        <>
            <section className="info">
                <div>
                    <h3 className='hero_title hero_title2'>Cabin Activities</h3>
                    <p className='hero_text hero_text2'>Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.
                    </p>
                </div>
                <img src={InfoImg} alt="info-img" width={384} height={384} />
            </section>
        </>
    )
}

export default Info