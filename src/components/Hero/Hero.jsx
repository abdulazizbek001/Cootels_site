import './Hero.css';
import HeroImg from "../../assets/img/hero-img.png";

function Hero() {
    return (
        <>
            <section className="hero">
                <div>
                    <h1 className='hero_title'>Nature, Warmth, and Beauty in One Space</h1>
                    <p className='hero_text'>One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.</p>
                    <button className='hero_btn'>Reservation</button>
                </div>
                <img className='hero_img' src={HeroImg} alt="hero_img" width={588} height={669} />
            </section>
        </>
    )
}

export default Hero