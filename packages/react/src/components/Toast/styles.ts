import { styled, keyframes } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastContainer = styled(Toast.Provider, {})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 25,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${25}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${25}px))` },
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: 15,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  marginBottom: 5,
  fontWeight: 500,
  color: '$gray800',
  fontSize: 15,
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$gray600',
  fontSize: 13,
  lineHeight: 1.3,
})

export const ToastAction = styled(Toast.Action, {
  gridArea: 'action',
})

export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  fontWeight: 500,

  variants: {
    size: {
      small: {
        fontSize: 12,
        padding: '0 10px',
        lineHeight: '25px',
        height: 25,
      },
      large: {
        fontSize: 15,
        padding: '0 15px',
        lineHeight: '35px',
        height: 35,
      },
    },
    variant: {
      violet: {
        backgroundColor: 'white',
        color: '$ignite300',
        boxShadow: `0 2px 10px $ignite300`,
        '&:hover': { backgroundColor: '$black' },
        '&:focus': { boxShadow: `0 0 0 2px $black` },
      },
      green: {
        backgroundColor: '$ignite700',
        color: '$ignite500',
        boxShadow: `inset 0 0 0 1px $ignite600`,
        '&:hover': { boxShadow: `inset 0 0 0 1px $ignite700` },
        '&:focus': { boxShadow: `0 0 0 2px $ignite700` },
      },
    },
  },

  defaultVariants: {
    size: 'large',
    variant: 'violet',
  },
})
