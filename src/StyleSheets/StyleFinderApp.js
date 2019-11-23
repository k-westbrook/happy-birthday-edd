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
        backgroundColor: 'black'
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
        color: 'white'
      }
    }
  }

  return styles;


};
