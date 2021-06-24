import { container } from 'assets/jss/constants'

const roadmapSectionStyle = {
  buySectionArea: {
    width: '100%',
    position: 'relative',
    backgroundColor: 'black',
    paddingBottom: '64px',
  },
  roadmapTitle: {
    color: '#F53EDA !important',
  },
  title: {
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
    '@media (max-width: 600px)': { paddingTop: '16px' },
    '@media (min-width: 600px)': { paddingTop: '20px' },
    '@media (min-width: 768px)': { paddingTop: '30px' },
    '@media (min-width: 960px)': { paddingTop: '40px' },
    '@media (min-width: 1280px)': { paddingTop: '46px' },
  },
}

export default roadmapSectionStyle
