import React from 'react';



const useStyles = makeStyles ({
  root: {
      "& .MuiBottomNavigationAction-root": {
          minWidth: 0,
          maxWidth: 250,
      },
      "& .MuiSvgIcon-root": {
          fill: "tan",
          "&:hover": {
              fill: "tomato",
              fontSize: "1.8ren",
          },
      },
  },
});

const Footer = () => {
  const classes = useStyles()
  return (
          <BottomNavigation width="auto" style={{background: "#233"}}>
              <BottomNavigationAction className={classes.root} style={{padding: 0}}
              icon={<Facebook />} />
              <BottomNavigationAction className={classes.root} style={{padding: 0}}
              icon={<Twitter />} />
              <BottomNavigationAction className={classes.root} style={{padding: 0}}
              icon={<Instagram />} />
              <BottomNavigationAction className={classes.root} style={{padding: 0}}
              icon={<Facebook />} />
              <BottomNavigationAction className={classes.root} style={{padding: 0}}
              icon={<Twitter />} />
              <BottomNavigationAction className={classes.root} style={{padding: 0}}
              icon={<Instagram />} />
          </BottomNavigation>
  );
}

export default Landing3;