export const styleFinder = () => {
  let styles;
  if (window.matchMedia("(max-width: 600px)").matches) {
    styles = {
      pageContainer:
      {
        display: 'flex',
        flexDirection: "column",
        padding: '2vh'
      },
      titleContainer:
      {
        textAlign: 'center',
        marginBottom: '5vh',
        color: 'white'
      },
      Paper: {
        marginLeft: '2vw',
        marginRight: '1vw'

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
