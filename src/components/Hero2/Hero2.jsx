import './Hero2.css';
import HeroImg2 from "../../assets/img/hero-img2.jpg";

function Hero2() {
    return (
        <>
            <section className="hero">
                <img className='hero_img' src={HeroImg2} alt="hero_img" width={384} height={576} />
                <div>
                    <h2 className='hero_title hero_title2'>Cozy and Down to Earth Cootage Hotel in Norway.</h2>
                    <p className='hero_text hero_text2'>Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.</p>
                    <p className='hero_text hero_text2'>Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.</p>
                    <button className='hero_btn'>Reservation</button>
                </div>
            </section>
        </>
    )
}

export default Hero2