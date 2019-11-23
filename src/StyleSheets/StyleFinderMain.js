export const styleFinder = () => {
  let styles;
  if (window.matchMedia("(max-width: 600px)").matches) {
    styles = {
      pageContainer:
      {
        display: 'flex',
        flexDirection: "column",
        width: '100vw',
        minHeight: '100vh',
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 58%, rgba(253,64,39,1) 82%, rgba(252,176,69,1) 100%)'

      },
      titleContainer:
      {
        textAlign: 'center',
        marginBottom: '5vh',
        marginTop: '2vh',
        color: 'white',
        height: '35vh',
        borderStyle: 'solid',
        padding: '2vh'
      },
      header:
      {
        fontSize: '12vh'
      },
      Paper: {
        marginLeft: '2vw',
        marginRight: '1vw',
        height: '30vh',
        padding: '1vh'

      },
      textContainer:
      {
        marginTop: '1vh',
        marginBottom: '3vh'
      },
      paperContainer:
      {
        height: '30vh'
      }
    }
  } else {
    styles = {
      pageContainer:
      {
        display: 'flex',
        flexDirection: "column"
      },
      button:
      {
        backgroundColor: 'white',
        width: "50%",
        marginTop: '2vh'
      },
      buttonGroup:
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }
  }

  return styles;


};
