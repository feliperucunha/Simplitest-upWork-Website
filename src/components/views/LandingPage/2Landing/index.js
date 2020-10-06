import React from 'react';



// Styles
const useStyles = makeStyles(theme=>({
  menuSliderContainer: {
      width: 250,
      height: "100%",
      background: "#511"
  },
  avatar: {
      display: "block",
      margin: "0.5rem auto",
      width: theme.spacing(13),
      height: theme.spacing(13)
  },
  listItem: {
      color: "tan"
  }
}));

const menuItems = [
  {
      listIcon: <Home/>,
      listText: "Home",
      listPath: "/"
  },
  {
      listIcon: <AssignmentInd/>,
      listText: "Resume",
      listPath: "/resume"
  },
  {
      listIcon: <Apps/>,
      listText: "Portfolio",
      listPath: "/portfolio"
  },
  {
      listIcon: <ContactMail/>,
      listText: "Contacts",
      listPath: "/contacts"
  }
  
]

const Navbar = () => {
  const [state, setState] = useState({
      right: false
  });

  const toggleSlider = ((slider, open) => () => {
      setState({...state, [slider]: open });
  });

  const classes = useStyles()

  const sideList = slider =>(
      <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
          <Divider />
          <Avatar className={classes.avatar} src={sensegrass} alt="icon"></Avatar>
          <List>
              {menuItems.map((lsItem, key)=>(
                  <ListItem button key={key} component={Link} to={lsItem.listPath}>
                  <ListItemIcon className={classes.listItem}>
                      {lsItem.listIcon}
                  </ListItemIcon>
                  <ListItemText className={classes.listItem} primary={lsItem.listText} />
                  </ListItem>
              ))}
          </List>
      </Box>
  )
  return (
      <Box>
          <Box component="nav">
              <AppBar position="static" style={{background: "#222"}}>
                  <Toolbar>
                      <IconButton onClick={toggleSlider("right", true)}>
                          <ArrowBack style={{color: "tomato"}} /> 
                      </IconButton>
                      <Typography variant="h5" style={{color: "tan"}}>
                          Dashboard
                      </Typography>
                      <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
                          {sideList("right")}
                         <Footer></Footer>
                      </MobilRightMenuSlider>
                  </Toolbar>
              </AppBar>
          </Box>
      </Box>
  )
}

export default Landing2;
