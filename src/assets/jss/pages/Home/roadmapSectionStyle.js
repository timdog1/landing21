import { container } from 'assets/jss/constants'

const roadmapSectionStyle = {
  buySectionArea: {
    width: '100%',
    position: 'relative',
    backgroundColor: 'black',
    paddingBottom: '30px',
    paddingTop: '94px',
  },
  roadmapTitle: {
    color: '#F53EDA !important',
  },
  title: {
    fontFamily: 'DaysOneRegular',
    fontWeight: 700,
    '@media (max-width: 600px)': { fontSize: '30px', lineHeight: '40px' },
    '@media (min-width: 600px)': { fontSize: '30px', lineHeight: '40px' },
    '@media (min-width: 768px)': { fontSize: '35px', lineHeight: '50px' },
    '@media (min-width: 960px)': { fontSize: '45px', lineHeight: '55px' },
    '@media (min-width: 1280px)': { fontSize: '45px', lineHeight: '60px' },
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '1.47px',
    color: '#FFFFFF',
    justifyContent: 'center',
    marginBottom: 30,
  },
  container: {
    ...container,
  },
  content: {
    '@media (max-width: 600px)': { paddingTop: '5px' },
    '@media (min-width: 600px)': { paddingTop: '10px' },
    '@media (min-width: 768px)': { paddingTop: '10px' },
    '@media (min-width: 960px)': { paddingTop: '15px' },
    '@media (min-width: 1280px)': { paddingTop: '15px' },
  },
}

export default roadmapSectionStyle
