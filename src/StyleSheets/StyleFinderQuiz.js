

export const styleFinder = () => {
  let styles;
  if (window.matchMedia("(max-width: 812px)").matches) {
    styles = {
      pageContainer:
      {
        display: 'flex',
        flexDirection: "column",
        padding: '2vh',
        width: '100vw',
        minHeight: '100vh',
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 58%, rgba(253,64,39,1) 82%, rgba(252,176,69,1) 100%)',

      },
      radioGroup:
      {
        display: 'flex',
        flexDirection: 'row',

      },
      Paper: {
        marginLeft: '2vw',
        marginRight: '2vw',
        minHeight: '25vh',
        padding: '2vh'
      },

      buttonGroup:
      {
        marginTop: '2vh',
        display: 'flex',
        justifyContent: 'center'

      },
      button:
      {
        fontSize: '3vh'
      }
    }
  } else {
    styles = {
      pageContainer:
      {
        display: 'flex',
        flexDirection: "column",
        padding: '2vh',
        alignItems: 'center',
        width: '100vw',
        minHeight: '100vh',
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 58%, rgba(253,64,39,1) 82%, rgba(252,176,69,1) 100%)',
        paddingTop: '8vh'
      },
      radioGroup:
      {
        display: 'flex',
        flexDirection: 'row',
        minHeight: '4vh'
      },
      Paper: {
        marginLeft: '2vw',
        marginRight: '2vw',
        minHeight: '25vh',
        padding: '3vh',
        minWidth: '40vw'
      },

      buttonGroup:
      {
        marginTop: '2vh',
        marginBottom: '2vh',
        display: 'flex',
        justifyContent: 'center'

      },
      button:
      {
        fontSize: '3vh'
      }
    }
  }

  return styles;


};
