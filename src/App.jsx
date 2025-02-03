import Logo from './components/logo/logo';
import Intro from './components/intro/intro';
import Socials from './components/socials/socials';
import GalleryLayout from './components/galleryLayout/galleryLayout';
import './App.scss'

function App() {

  return (
    <div className="layout">
        <div className="layout__sidebar">
          <div className="layout__sidebar-content">
            <Logo />
            <Intro />
            <Socials />
          </div>
      </div>
      <div className="layout__main">
        <GalleryLayout />
      </div>
    </div>
  )
}

export default App
