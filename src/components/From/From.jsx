import './From.css';
import FromImg from '../../assets/img/from-img.jpg';
import FromSliter from '../../assets/svg/from-sliter.svg';

function From() {
    return (
        <>
            <section className="from">
                <h3>Hear From Our Happy Customers</h3>
                <img className='from_img1' src={FromImg} alt="img" width={120} height={120} />
                <p>“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”</p>
                <h6>Kirana Dunham</h6>
                <img className='from_img2' src={FromSliter} alt="svg" width={72} height={12} />
            </section>
        </>
    )
}
export default From