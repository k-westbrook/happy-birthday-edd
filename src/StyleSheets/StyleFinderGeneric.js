


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
        color: 'black',
        fontSize: '4vh'
      },
      inputLabel:
      {
        fontSize: '4vh',
        marginBottom: '3vh',
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

      },
      paper:
      {
        margin: '2vh',

      }
    }


  } else {
    styles = {
      pageContainer:
      {
        display: 'flex',
        flexDirection: "column",
        width: '100vw',
        minHeight: '100vh'
      },
      contentContainer:
      {
        marginTop: '5vh',
        padding: '4vh',
        display: 'flex',
        flexDirection: 'column',
        width: '70vw'
      },
      bottomHalfContainer:
      {
        display: 'flex',
        justifyContent: 'center'
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
        minHeight: '20vh',
        fontSize: '3vh',
        width: '70vw'
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
        color: 'black',
        fontSize: '4vh'
      },
      inputLabel:
      {
        fontSize: '4vh',
        marginBottom: '3vh',
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
        marginBottom: '3vh',
        fontSize: '10vh'
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

      },
      paper:
      {
        marginTop: '5vh',
        width: '30vw'

      }
    }
  }

  return styles;


};
