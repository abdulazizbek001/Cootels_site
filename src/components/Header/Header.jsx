import './Header.css';

function Header() {
    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="header_box">
                        <h2 className='header_title'>Cootels</h2>
                        <ul className='header_list'>
                            <li>
                                <a className='header_list-link' href="#">Rooms</a>
                            </li>
                            <li>
                                <a className='header_list-link' href="#">Reservation</a>
                            </li>
                            <li>
                                <a className='header_list-link' href="#">Contacs</a>
                            </li>
                        </ul>
                        <a className='header_link' href="#">Get Started</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header