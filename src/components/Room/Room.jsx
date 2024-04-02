import './Room.css';
import RoomBtn from "../../assets/svg/romm-btn.svg";
import RoomBtn2 from "../../assets/svg/room-btn2.svg";

function Room() {
    return (
        <>
            <section className="room">
                <div className="room_left-box">
                    <p className='room_left_top-text'>Start your journey!</p>
                    <h4 className='room_left_title'>How to Get My Room?</h4>
                    <p className='room_left_center-text'>You can contact us by phone or email us. Easily tap the contact button below and it will take you to our contact point</p>
                    <div className='room_left_box'>
                        <a className='header_link room_left-link' href="#">Contact us</a>
                        <p className='room_left_bottom-text'>Explore more room</p>
                    </div>
                </div>
                <div className="room_right-box">
                    <button className='room_right-btn room_right-btn1'>
                        <div>
                            <h3 className='room_right-btn_title'>1. Choose a room and date</h3>
                            <button className='room-right-btn'>
                                <img src={RoomBtn} alt="svg" width={24} height={24} />
                            </button>
                        </div>
                    </button>
                    <button className='room_right-btn room_right-btn2'>
                        <div>
                            <h3 className='room_right-btn_title'>2. Check for room availability</h3>
                            <button className='room-right-btn2'>
                                <img src={RoomBtn2} alt="svg" width={24} height={24} />
                            </button>
                        </div>
                        <p className='room_right-btn-text2'>Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.</p>
                    </button>
                    <button className='room_right-btn room_right-btn3'>
                        <div>
                            <h3 className='room_right-btn_title'>3. Enjoy your room</h3>
                            <button className='room-right-btn'>
                                <img src={RoomBtn} alt="svg" width={24} height={24} />
                            </button>
                        </div>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Room