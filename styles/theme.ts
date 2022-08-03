import type { Theme } from 'theme-ui'

const colors = {
  ablue: '#1A90D9',
}

const headerNavStyles = {
  base: {
    color: 'primary',
    marginRight: 7,
    ':visited': {
      color: 'primary',
    },
    textDecoration: 'none',
    fontSize: 3,
  },
  active: {
    '::first-letter': {
      fontWeight: 'bold',
      color: 'accent',
    },
  },
}

export const theme: Theme = {
  space: [0, 2, 3, 5, 8, 13, 21, 34, 55, 89],
  fonts: {
    body: '"Raleway", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  colors: {
    text: '#000',
    background: '#f8f8f8',
    primary: '#123123',
    accent: colors.ablue,
  },
  breakpoints: ['@media screen and (min-width: 1024px)', '@media screen and (max-width: 1023px)'],
  styles: {
    root: {
      fontFamily: 'body',
      backgroundColor: 'background',
      fontSize: 3,
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
    a: {
      textDecoration: 'none',
      color: 'text',
      borderBottom: '2px solid',
      borderColor: 'accent',
      ':hover': { color: 'accent' },
      transition: 'one',
      fontWeight: 'normal',
      display: 'inline',
      lineHeight: 1.5,
    },
    h1: {
      fontSize: 6,
    },
    h2: {
      fontSize: 5,
    },
    h3: {
      fontSize: 4,
    },
    h4: {
      fontSize: 3,
    },
    h5: {
      fontSize: 2,
    },
    h6: {
      fontSize: 1,
    },
    p: {
      lineHeight: 1.5,
    },
  },
  links: {
    nav: {},
    headerNav: {
      ...headerNavStyles.base,
    },
    headerNavCurrent: {
      ...headerNavStyles.base,
      ...headerNavStyles.active,
    },
    postPreview: {
      display: 'block',
      textDecoration: 'none',
      color: 'inherit',
      border: '1px solid',
      borderColor: '#D6D6D6',
      borderRadius: '6px',
      mb: 5,
      py: 3,
      px: 6,
      transition: 'one',
      '&:hover h3': {
        transition: 'one',
        color: 'accent',
      },
      ':hover': {
        borderColor: 'accent',
      },
    },
  },
  sizes: {
    container: 1280,
  },
  layout: {
    container: {
      px: [4, null],
    },
  },
  transitions: {
    one: 'all .2s ease',
  },
}
