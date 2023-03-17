import { useTheme } from 'anu/config';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Container, Engine, IOptions, RecursivePartial } from 'tsparticles-engine';

const Home = () => {
  const theme = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await container;
  }, []);

  // const particlesInit = useCallback(async (engine: Engine) => {
  //   await loadParticlesLinksInteraction(engine);
  // }, []);

  const options: RecursivePartial<IOptions> = {
    background: {
      color: {
        value: theme.colors?.$background as string,
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
          speed: 5,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          speed: 5,
        },
      },
    },
    particles: {
      color: {
        value: '#3E1515',
      },
      links: {
        color: '#E35656',
        distance: 150,
        enable: true,
        opacity: 0.7,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 40,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 10 },
      },
    },
    detectRetina: true,
  };

  return (
    <div>
      <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={options} />
    </div>
  );
};

export default Home;
