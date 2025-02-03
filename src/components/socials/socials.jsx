import './socials.scss';

function Socials () {
  return (
      <div className="socials">
          <div className="socials__title">Find me</div>
          <ul className="socials__list">
              <li><a href="https://x.com/maomonium" target="_blank" className="socials__link"><i className="fa-brands fa-twitter-square socials__icon"></i></a></li>
              <li><a href="https://bsky.app/profile/maomonium.bsky.social" target="_blank" className="socials__link"><i className="fa-brands fa-square-bluesky socials__icon"></i></a></li>
              <li><a href="https://www.tumblr.com/maomonium" target="_blank" className="socials__link"><i className="fa-brands fa-tumblr-square socials__icon"></i></a></li>
              <li><a href="https://www.instagram.com/maomonium/" target="_blank" className="socials__link"><i className="fa-brands fa-instagram-square socials__icon"></i></a></li>
          </ul>
      </div>
  )
}

export default Socials; 