import main from '../images/main.jpeg'

export const styleFinder = () => {
  let styles;
  if (window.matchMedia("(max-width: 812px)").matches) {
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
        padding: '2vh',
        marginLeft: '3vw',
        marginRight: '3vw'
      },
      header:
      {
        fontSize: '12vh'
      },
      FieldSet:
      {
        height: '100%'
      },
      Paper: {
        marginLeft: '2vw',
        marginRight: '2vw',
        minHeight: '25vh',
        padding: '2vh'

      },
      textContainer:
      {
        height: '20vh'
      },
      text:
      {
        fontSize: '2.5vh',

      },
      paperContainer:
      {
        height: '30vh'
      },
      buttonGroup:
      {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '2vh',
        marginBottom: '2vh'
      },
      button: {
        width: '40%',
        fontSize: '3vh'
      }
    }
  } else {
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
        marginBottom: '10vh',
        marginTop: '2vh',
        color: 'white',
        height: '15vh',
        borderStyle: 'solid',
        padding: '2vh',
        marginLeft: '3vw',
        marginRight: '3vw'
      },
      header:
      {
        fontSize: '12vh'
      },
      FieldSet:
      {
        height: '90%'
      },
      Paper: {
        width: '50%',
        padding: '2vw'
      },
      textContainer:
      {
        height: '20vh'
      },
      text:
      {
        fontSize: '3.5vh',

      },
      paperContainer:
      {
        height: '45vh',
        display: 'flex',
        justifyContent: 'center'
      },
      buttonGroup:
      {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '1vh',
        marginBottom: '2vh'
      },
      button: {
        width: '40%',
        fontSize: '3vh'
      }
    }
  }

  return styles;


};
