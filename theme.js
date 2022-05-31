import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  colors: {
    gray: {
      '50': '#F2F2F2',
      '100': '#DBDBDB',
      '200': "#C4C4C4",
      '300': "#ADADAD",
      '400': "#969696",
      '500': "#808080",
      '600': "#666666",
      '700': "#4D4D4D",
      '800': "#222",
      '900': "#1A1A1A"
    },
    dark: {
      '500': 'rgb(65, 65, 65)'
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      outline: '0px !important',
      '-webkit-tap-highlight-color': 'transparent'
    }
  },
  layerStyles: {
    header: {
      pt: 5,
      minH: '10vh',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    song: {
      // minH="60vh" alignItems="center" justifyContent="center" spacing={4}
      minH: '60vh',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    library: {
      top: 0, left: 0,
      bgColor: '#fff',
      h: 'full', pos: 'fixed',
      overflow: 'scroll',
      transition: 'all 0.5s ease',
      w: { base: 'full', md: '20rem' },
      boxShadow: '2px 2px 50px rgb(204, 204, 204)',
    },
    'library-song': {
      py: '1rem',
      px: '2rem',
      cursor: 'pointer',
      alignItems: 'center',
      transition: 'all 0.5s ease',
      _hover: {
        background: 'rgb(205, 233, 221)'
      }
    },
    player: {
      minH: '20vh',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    controls: {
      w: { base: 'none', md: '30%' },
      py: '16px',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'orange.500',
      }
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: 'orange.500',
      }
    },
    Select: {
      defaultProps: {
        focusBorderColor: 'orange.500',
      }
    },
    Tabs: {
      baseStyle: {
        button: {
          _focus: {
            boxShadow: 'none',
          },
          _hover: {
            boxShadow: 'none',
          },
          _active: {
            boxShadow: 'none',
          }
        }
      }
    },
    Button: {
      baseStyle: {
        transition: `all 500ms ease`,
        _focus: {
          boxShadow: 'none',
        },
        _hover: {
          boxShadow: 'none',
        }
      },
      variants: {
        library: {
          p: '8px',
          rounded: 0,
          zIndex: { base: 2, md: 1 },
          cursor: 'pointer',
          borderWidth: 2,
          borderColor: 'dark.500',
          transition: 'all 0.3s ease',
          _hover: { 
            bg: 'dark.500', 
            color: 'white' 
          }
        }
      }
    }
  }
})

export default theme