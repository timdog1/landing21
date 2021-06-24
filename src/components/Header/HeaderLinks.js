/*eslint-disable*/
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import { useHistory } from 'react-router-dom'

// @material-ui/core components
import { List, ListItem, Typography } from '@material-ui/core'

// import context variables
import { useNavigation } from 'hook/Context/NavigationContext'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Header/headerLinksStyle.js'
import discord from 'assets/images/Home/discord.svg'
import instagram from 'assets/images/Home/instagram.svg'
import twitter from 'assets/images/Home/twitter.svg'

const useStyles = makeStyles(styles)

const HeaderLinks = () => {
  const classes = useStyles()
  const history = useHistory()

  // context variables
  const { navigation, setNavigation } = useNavigation()

  // handlers
  const handleGotoNav = path => {
    setNavigation(path)
    history.push('/#' + path)
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('buyNow')}>
        <Link
          to="/home#buyNow"
          className={navigation === 'buyNow' ? classes.selectedText : classes.text}
          onClick={() => handleGotoNav('buyNow')}
        >
          <Typography className={classes.buyNow}>BUY NOW</Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('roadmap')}>
        <Link to="/home#roadmap" className={navigation === 'roadmap' ? classes.selectedText : classes.text}>
          <Typography className={classes.headerTitle}>ROADMAP</Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('teamMeet')}>
        <Link to="/home#teamMeet" className={navigation === 'teamMeet' ? classes.selectedText : classes.text}>
          <Typography className={classes.headerTitle}>TEAM</Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('support')}>
        <Link to="/home#support" className={navigation === 'support' ? classes.selectedText : classes.text}>
          <Typography className={classes.headerTitle}>SUPPORT</Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a href="https://twitter.com">
          <img src={twitter} className={classes.socialAvatar} />
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a href="https://discord.com">
          <img src={discord} className={classes.socialAvatar} />
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a href="https://instagram.com">
          <img src={instagram} className={classes.socialAvatar} />
        </a>
      </ListItem>
    </List>
  )
}

export default HeaderLinks
