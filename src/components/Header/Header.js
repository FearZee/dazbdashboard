import './Header.css'

function Header() {
    return (
        <div>
            <img className='Logo' src={'DHZB_Logo.png'} alt={['DHZB-Logo']}></img>
            <div></div>
            <div className='colorStripe'></div>
        </div>
    );
}

export default Header;