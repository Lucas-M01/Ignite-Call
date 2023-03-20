import { ComponentProps, useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
import {
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {}

export function Toast() {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <ToastContainer>
      <Button>Add to calendar</Button>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>Scheduled: Catch up</ToastTitle>
        <ToastDescription asChild>
          <time dateTime={eventDateRef.current.toISOString()}></time>
        </ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo"></ToastAction>
      </ToastRoot>
      <ToastViewport />
    </ToastContainer>
  )
}
