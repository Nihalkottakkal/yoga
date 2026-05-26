import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Vision       from './components/Vision'
import Philosophy   from './components/Philosophy'
import Programs     from './components/Programs'
import Courses      from './components/Courses'
import Certification from './components/Certification'
import WhyChooseUs  from './components/WhyChooseUs'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Philosophy />
      <Programs />
      <Courses />
      <Certification />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  )
}
