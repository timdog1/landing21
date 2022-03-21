import React from 'react'
import { Box, Typography } from '@material-ui/core'
// core components
import Roadmap from 'components/Roadmap/Roadmap'
// images
import roadmap1 from 'assets/images/Home/10.png'
import roadmap2 from 'assets/images/Home/20.png'
import roadmap3 from 'assets/images/Home/30.png'
import roadmap4 from 'assets/images/Home/40.png'
import roadmap5 from 'assets/images/Home/50.png'
import roadmap6 from 'assets/images/Home/60.png'
import roadmap7 from 'assets/images/Home/70.png'
import roadmap8 from 'assets/images/Home/80.png'
import roadmap9 from 'assets/images/Home/80.png'
import roadmap10 from 'assets/images/Home/100.png'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/roadmapSectionStyle'

const useStyles = makeStyles(styles)

const RoadmapSection = () => {
  const classes = useStyles()

  return (
    <Box className={classes.buySectionArea}>
      {/* <Box className={classes.container}> */}
      <Box className={classes.content}>
        <Typography className={clsx(classes.roadmapTitle, classes.title)}>ROADMAP</Typography>
      </Box>
      <Box className={classes.roadmapContainer}>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap1} percentage={10} description={'The roadmap will be realized with the percentage of completion of sales, and the project will be able to move forward with the revenue from sales.'} />
        </Box>
        <Box style={{ marginLeft: '120px' }}>
          <Roadmap
            image={roadmap2}
            percentage={20}
            description={'The website will be opened.'}
          />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap3} percentage={30} description={'A volunteer Funky career program will be launched.'} />
        </Box>
        <Box style={{ marginLeft: '0px' }}>
          <Roadmap
            image={roadmap4}
            percentage={40}
            description={'The terrace will be operational.'}
          />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap5} percentage={50} description={'The token name and roadmap will be prepared together with the community, and the purpose for which it will be used will be determined by the opinions and votes of the community.'} />
        </Box>
        <Box style={{ marginLeft: '120px' }}>
          <Roadmap image={roadmap6} percentage={60} description={'A community-specific utility token will be released.'} />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap7} percentage={70} description={'IRL events and live meetings will be held together with the members of the Funky Pub, which we have established with strong ties.'} />
        </Box>
        <Box style={{ marginLeft: '0px' }}>
          <Roadmap image={roadmap8} percentage={80} description={'The Metaverse and Web 3.0 roadmap will be determined with the ideas and votes of the community and Funky NFT owners, and then their development will begin.'} />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap
            image={roadmap9}
            percentage={90}
            description={'The Metaverse and Web 3.0 roadmap will be determined with the ideas and votes of the community and Funky NFT owners, and then their development will begin.'}
          />
        </Box>
        <Box style={{ marginLeft: '120px' }}>
          <Roadmap
            image={roadmap10}
            percentage={100}
            description={'The Chain Baazar, the first decentralized international baazar in the world, will begin its development.'}
          />
        </Box>
      </Box>
      {/* </Box> */}
    </Box>
  )
}

export default RoadmapSection
