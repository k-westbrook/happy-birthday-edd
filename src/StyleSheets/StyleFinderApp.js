import main from '../images/main.jpeg'

export const styleFinder = () => {
  let styles;
  if (window.matchMedia("(max-width: 600px)").matches) {
    styles = {
      AppBackground: {
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: 'black'
      },
      MainApp:
      {
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 58%, rgba(253,64,39,1) 82%, rgba(252,176,69,1) 100%)'
      }
    }
  } else {
    styles = {
      AppBackground: {
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: 'black'
      },
      MainApp:
      {
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${main})`,
      }
    }
  }

  return styles;


};
