import main from '../images/main.jpeg'


export const styleFinder = () => {
  let styles;
  if (window.matchMedia("(max-width: 600px)").matches) {
    styles = {
      pageContainer:
      {
        display: 'flex',
        flexDirection: "column",
        backgroundColor: 'black',
        width: '100vw',
        minHeight: '100vh'
      },
      contentContainer:
      {
        marginTop: '5vh',
        padding: '1vh',

      },
      title:
      {
        marginBottom: '3vh',
        color: 'red'
      },
      text:
      {
        color: 'white',
        borderStyle: 'double',
        padding: '2vh',
        minHeight: '30vh'
      },
      submitButton:
      {
        width: "60%",
        height: '7vh',
        marginTop: '2vh'
      },
      buttonGroup:
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      formContainer:
      {
        padding: '3vh',
        backgroundColor: 'white',
        minHeight: '10vh'
      },
      nameForm:
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
      input:
      {
        width: '80%',
        marginBottom: '2vh',
        color: 'black'
      },
      inputLabel:
      {
        fontSize: '4vh',
        marginBottom: '2vh',
        color: 'black'
      },
      storyContent: {
        color: 'white',
        fontSize: '2.5vh',
        marginBottom: '6vh'
      },
      pageTitle:
      {
        color: 'red',
        marginBottom: '3vh'
      },
      storyContainer:
      {
        marginTop: '5vh',
        padding: '2vh'
      },
      button: {
        width: '80%',
        marginBottom: '3vh'
      },
      endPageContainer: {
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 58%, rgba(253,64,39,1) 82%, rgba(252,176,69,1) 100%)',
        display: 'flex',
        flexDirection: "column",
        width: '100vw',
        minHeight: '100vh'

      },
      endContent:
      {
        marginTop: '5vh',
        padding: '3vh'
      },
      endTitle:
      {
        color: 'white',
        marginBottom: '2vh',
        borderStyle: 'solid',
        padding: '4vh',
        textAlign: 'center'
      },
      endText:
      {
        fontSize: '3vh',
        marginBottom: '3vh'
      },
      paperEnd:
      {
        padding: '2vh'
      },
      endButton:
      {
        width: '80%',
        fontSize: '2.5vh',
        marginBottom: '3vh'

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
