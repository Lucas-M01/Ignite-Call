import { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@lucasmont-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,

  args: {},
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
