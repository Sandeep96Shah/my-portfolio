import dynamic from 'next/dynamic';
const Acomplishments = dynamic(() => import('../components/Acomplishments/Acomplishments'), { ssr: false })
const BgAnimation = dynamic(() => import('../components/BackgrooundAnimation/BackgroundAnimation'), { ssr: false })
const Hero = dynamic(() => import('../components/Hero/Hero'), { ssr: false })
const Projects = dynamic(() => import('../components/Projects/Projects'), { ssr: false })
const Technologies = dynamic(() => import('../components/Technologies/Technologies'), { ssr: false })
const Timeline = dynamic(() => import('../components/TimeLine/TimeLine'), { ssr: false })
const Layout = dynamic(() => import('../layout/Layout'), { ssr: false })
const MainSection = dynamic(() => import('../styles/GlobalComponents'), { ssr: false })


const Home = () => {
  return (
     <Layout>
      <MainSection grid>
        <Hero />
        <BgAnimation />
      </MainSection>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
   </Layout>
  );
};

export default Home;
