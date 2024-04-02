import './Footer.css';
import FooterTwitter from '../../assets/svg/footer-twitter.svg';
import FooterInstagram from '../../assets/svg/footer-instagram.svg';
import FooterFacebook from '../../assets/svg/footer-facebook.svg';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer_box">
                        <div>
                            <h3>Cootels</h3>
                            <p>Your Best Private <br /> Hideway From Crowd. <br /> Back to Nature.</p>
                            <ul className='footer_list2'>
                                <li>
                                    <img src={FooterTwitter} alt="twitter" width={32} height={26} />
                                </li>
                                <li>
                                    <img src={FooterInstagram} alt="instagram" width={32} height={32} />
                                </li>
                                <li>
                                    <img src={FooterFacebook} alt="facebook" width={32} height={32} />
                                </li>
                            </ul>
                        </div>
                        <ul className='footer_list'>
                            <li>
                                <h6 className='footer_list-title'>Rooms</h6>
                                <a className='footer_link' href="#">Single Room</a>
                                <a className='footer_link' href="#">Double Room</a>
                                <a className='footer_link' href="#">Cabin</a>
                                <a className='footer_link' href="#">Custom Room</a>
                            </li>
                            <li>
                                <h6 className='footer_list-title'>Reservation</h6>
                                <a className='footer_link' href="#">See the Steps</a>
                                <a className='footer_link' href="#">Best Time</a>
                            </li>
                            <li>
                                <h6 className='footer_list-title'>Contact</h6>
                                <a className='footer_link' href="#">Our Number</a>
                                <a className='footer_link' href="#">Our Email</a>
                                <a className='footer_link' href="#">Our Location</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer