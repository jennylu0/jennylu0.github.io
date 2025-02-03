import './logo.scss';
import logo from '../../assets/images/logo.png';

function Logo() {
  return (
      <div className="logo">
          <div className="logo__container">
            <img src={logo} alt="logo" className="logo__img" />
          </div>
      </div>
  )
}

export default Logo; 