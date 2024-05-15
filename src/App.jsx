
import Home from './components/home/Home'

import { Routes, Route } from 'react-router'
import Layout from './layout'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import SermonPage from './pages/Sermon'
import WorshipPage from './pages/Worship'
import SigninPage from './pages/Signin'
import SignupPage from './pages/Signup'
import DonatePage from './pages/Donate'
import EventPage from './pages/Event'
import GetInvolvedPage from './pages/GetInvolved'
import MinistriesPage from './pages/Ministries'
import GalleryPage from './pages/Gallery'
import SermonDetails from './pages/SemonDetails'

function App() {

  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/about'  element={<AboutPage />} />
          <Route path='/contact'  element={<ContactPage />} />
          <Route path='/sermon'  element={<SermonPage />} />
          <Route path='/worship'  element={<WorshipPage />} />
          <Route path='/donate'  element={<DonatePage />} />
          <Route path='/event'  element={<EventPage />} />
          <Route path='/gallery'  element={<GalleryPage />} />
          <Route path='/sermon-details/:blogId'  element={<SermonDetails />} />
          <Route path='/involved'  element={<GetInvolvedPage />} />
          <Route path='/ministries'  element={<MinistriesPage />} />
          <Route path='/signin'  element={<SigninPage />} />
          <Route path='/signup'  element={<SignupPage />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
