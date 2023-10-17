import './Header.css';
import logo from '../../../public/logo.png';
import userPhoto from '../../../public/boy.png';

export default function Header() {
    
    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="user-photo">
                <img src={userPhoto} alt="user photo" />
            </div>
        </div>
    )
}
