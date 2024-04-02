import './Choose.css';
import '../Hero/Hero.css';
import ChooseImg1 from "../../assets/img/choose-img1.jpg";
import ChooseImg2 from "../../assets/img/choose-img2.jpg";
import ChooseImg3 from "../../assets/img/choose-img3.jpg";
import ChooseSvgStrelka from "../../assets/svg/strelka.svg";

function Choose() {
    return (
        <>
            <section className="choose">
                <h3 className='hero_title2 choose_title'>Many Rooms to Choose</h3>
                <p className='hero_text choose_text'>There is a room for every needs. We have room for individuals until family size, we also have a cabin for more private experience</p>
                <button className='hero_btn choose_btn'>Explore more</button>
                <ul className="choose-list">
                    <li>
                        <img src={ChooseImg1} alt="chooser-img" width={384} height={489} />
                        <h4 className='choose-list-title'>Single Room</h4>
                        <p className='choose-list-text'>Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.</p>
                        <a className='choose-link' href="#">Learn more  <img src={ChooseSvgStrelka} alt="strelka" width={14} height={14} /></a>
                    </li>
                    <li>
                        <img src={ChooseImg2} alt="chooser-img" width={384} height={489} />
                        <h4 className='choose-list-title'>Double Room</h4>
                        <p className='choose-list-text'>Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two</p>
                        <a className='choose-link' href="#">Learn more  <img src={ChooseSvgStrelka} alt="strelka" width={14} height={14} /></a>
                    </li>
                    <li>
                        <img src={ChooseImg3} alt="chooser-img" width={384} height={489} />
                        <h4 className='choose-list-title'>Cootage</h4>
                        <p className='choose-list-text'>Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends</p>
                        <a className='choose-link' href="#">Learn more  <img src={ChooseSvgStrelka} alt="strelka" width={14} height={14} /></a>
                    </li>
                </ul>
            </section>
        </>
    )
}
export default Choose