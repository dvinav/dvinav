import { Header, Hero, Intro, Content, PortfolioSection, Contact } from '@/components/home'
import { themeColor } from '@/config/theme'

export const generateStaticParams = () => [{ locale: 'en' }, { locale: 'fa' }]

export const viewport = {
  themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Content>
        <Intro />
        <PortfolioSection />
      </Content>
      <Contact />
    </>
  )
}

export default Home
