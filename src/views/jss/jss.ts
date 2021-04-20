export const tabStyles = {
  tab: {
    background: 'white',
    height: 40,
    '& > span': {
      display: 'inline-block',
      width: 100,
      border: '1px solid red',
      height: '100%',
      margin: '0 10px 0',
      '& span': {
        color: 'blue'
      }
    }
  }
}

export const layoutStyles = (theme) => ({
  layout: {
    background: theme.primaryColor
  }
})

export const titStyle = (theme) => {
  return {
    tit: {
      background: theme.primaryColor
    }
  }
}