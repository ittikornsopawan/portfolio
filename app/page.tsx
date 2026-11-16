import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import BackgroundMusicPlayer from '@/components/BackgroundMusicPlayer'
import AboutQuote from '@/components/AboutQuote'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import CareerPath from '@/components/CareerPath'
import Testimonials from '@/components/Testimonials'
import Personality from '@/components/Personality'
import Hobbies from '@/components/Hobbies'
import GitHubRepos from '@/components/GitHubRepos'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollHint from '@/components/ScrollHint'

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main id="main" tabIndex={-1} className="relative z-10 pt-16 pb-24 outline-none sm:pb-0">
        <Hero />
        <BackgroundMusicPlayer />
        <hr className="section-divider" />
        <AboutQuote />
        <hr className="section-divider" />
        <Experience />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <GitHubRepos />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Testimonials />
        <hr className="section-divider" />
        <Certifications />
        <hr className="section-divider" />
        <CareerPath />
        <hr className="section-divider" />
        <Personality />
        <hr className="section-divider" />
        <Hobbies />
        <hr className="section-divider" />
        <Contact />
        <Footer />
      </main>
      <ScrollHint />
    </>
  )
}
