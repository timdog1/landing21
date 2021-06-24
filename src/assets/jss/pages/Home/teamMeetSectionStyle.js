import { container } from 'assets/jss/constants'

const teamMeetSectionStyle = {
  plutexSwapSectionArea: {
    width: '100%',
    position: 'relative',
  },
  gameContainer: {
    paddingTop: 30,
    backgroundColor: '#F53EDA ',
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
  meetAvatar: {
    borderRadius: '10px',
    textAlign: 'center',
    maxWidth: '300px',
  },
  content: {
    '@media (max-width: 600px)': { marginTop: '20px' },
    '@media (min-width: 600px)': { marginTop: '20px' },
    '@media (min-width: 768px)': { marginTop: '20px' },
    '@media (min-width: 960px)': { marginTop: '30px' },
    '@media (min-width: 1280px)': { marginTop: '30px' },
  },
}

export default teamMeetSectionStyle
