import { Meta, StoryObj } from '@storybook/react'
import { Box, Toast, ToastProps } from '@lucasmont-ignite-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,

  args: {
    date: 'Quarta-feira, 23 de Outubro às 16h',
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
