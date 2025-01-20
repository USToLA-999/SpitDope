
import FirstBar from './FirstBar'
import Navbar from '../../components/Navbar'
import Hero from './Hero'

import WeDo from './WeDo'
import Event from './Event'
import Footer from '../../components/Footer'
import Journeyy from './journey';


const Home = () => {
  return (
    <>
        <div className=' '>
            <Navbar />
        </div>
        <Hero />
        <FirstBar />
        <Journeyy />
        <WeDo />
        <Event />
        <Footer />
    </>
  )
}

export default Home
