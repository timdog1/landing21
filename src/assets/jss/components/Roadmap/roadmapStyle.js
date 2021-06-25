import { containerFluid } from 'assets/jss/constants'

const roadmapStyle = {
  body: {
    width: '100%',
    display: 'flex',
    margin: '20px 0px',
    alignItems: 'center',
  },
  image: {
    width: '60px',
    height: '60px',
  },
  container: {
    ...containerFluid,
    '@media (max-width: 768px)': {
      maxWidth: '540px',
    },
    '@media (min-width: 768px)': {
      maxWidth: '640px',
    },
    alignItems: 'left',
    flexWrap: 'wrap',
    marginLeft: 20,
    marginRight: 40,
  },
  description: {
    color: '#CCCCCC',
    fontFamily: 'CourierPrimeRegular',
    fontSize: '16px',
    fontWeight: 500,
    LineHeight: '25px',
    cursor: 'pointer',
    '&:hover': {
      color: '#E97800',
    },
  },
  percentage: {
    color: '#DDDDDD',
    fontFamily: 'CourierPrimeRegular',
    fontSize: '25px',
    fontWeight: 500,
    lingHeight: '41px',
    letterSpacing: '0.26px',
    cursor: 'pointer',
  },
}

export default roadmapStyle
