import './intro.scss';
import icon from '../../assets/images/Maomonium-pixel-x3.png';

function Intro() {
    return (
        <div className="intro">
            <div className="intro__eyebrow">
                Hi there! Im...
            </div>
            <div className="intro__title">
                <div className="intro__title-img-container">
                    <img src={icon} className="intro__title-img" alt="pixel icon" />
                </div>
                <h1 title="maomonium" className="maomonium">
                    <span className="maomonium__mao">
                        <span className="maomonium__mao-eyebrow">mao</span>
                        <span className="maomonium__mao-cn">猫</span>
                    </span>
                    <span className="maomonium__monium">monium</span>
                    <span className="maomonium__bang">!</span>
                </h1>
            </div>
            <div className="intro__subtitle">Sometimes I draw stuff. Sometimes I make stuff. Sometimes I sell stuff.</div>
            <div className="intro__body">Digital artist based in WA. Self proclaimed turbo introvert, creative hobby collector, comically bad gamer, and terminal craft supply hoarder.</div>
        </div>
    )
}

export default Intro; 