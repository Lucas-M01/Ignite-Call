import { Meta, StoryObj } from '@storybook/react'
import { Box, Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,

  args: {},
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
