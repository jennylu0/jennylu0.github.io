import './logo.scss';
import logo from '../../assets/images/logo.png';

function Logo() {
  return (
      <div className="logo">
        <a href="/" className="logo__link">
          <div className="logo__container">
            <img src={logo} alt="logo" className="logo__img" />
          </div>
        </a>
      </div>
  )
}

export default Logo; 