
import FirstBar from './FirstBar'
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import Journey from './journey';

import WeDo from './WeDo'
import Event from './Event'
import Footer from '../../components/Footer'


const Home = () => {
  return (
    <>
        <div className=' '>
            <Navbar />
        </div>
        <Hero />
        <FirstBar />
        <Journey />
        <WeDo />
        <Event />
        <Footer />
    </>
  )
}

export default Home
