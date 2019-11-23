export const styleFinder = () => {
  let styles;
  if (window.matchMedia("(max-width: 600px)").matches) {
    styles = {
      App: {
        display: 'flex',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'gray'
      }
    }
  } else {
    styles = {
      AppBackground: {
        backgroundColor: '#25274D'
      },
      MainApp:
      {
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  }

  return styles;


};
