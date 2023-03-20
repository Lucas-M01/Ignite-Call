import { X } from 'phosphor-react'
import { ComponentProps, useState } from 'react'
import { Button } from '../Button'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastHeader,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {}

export function Toast() {
  const [open, setOpen] = useState(false)

  return (
    <ToastContainer>
      <Button onClick={() => setOpen(true)}>Add to calendar</Button>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastHeader>
          <ToastTitle>Agendamento realizado</ToastTitle>
          <ToastClose>
            <X weight="bold" size={20} />
          </ToastClose>
        </ToastHeader>
        <ToastDescription asChild>
          <time dateTime={'dssds'}>ddd</time>
        </ToastDescription>
      </ToastRoot>
      <ToastViewport />
    </ToastContainer>
  )
}
