import { ComponentProps } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {}

export function Tooltip() {
  return (
    <TooltipContainer>
      <TooltipRoot>
        <TooltipTrigger asChild>
          <button>26</button>
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            26 de Outubro - Disponível
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
