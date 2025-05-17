declare global {
  type LC<T extends {} = {}> = React.FC<
    {
      children?: React.ReactNode
    } & T
  >

  type UIState = {
    (): any
    set: (value: any) => void
  }

  type CreateStateMethodsType = (state: any, setState: React.Dispatch<React.SetStateAction<any>>) => UIState

  type FC<P = {}> = React.FC<P>
  type ReactNode = React.ReactNode
  type Ref = React.Ref
  type ReactElement = React.ReactElement
  type SA<T> = React.Dispatch<React.SetStateAction<T>>

  type ChangeEvent<T = Element> = React.ChangeEvent<T>
  type FormEvent<T = Element> = React.FormEvent<T>
  type MouseEvent<T = Element> = React.MouseEvent<T>
  type KeyboardEvent<T = Element> = React.KeyboardEvent<T>
  type SyntheticEvent<T = Element, E = Event> = React.SyntheticEvent<T, E>

  type ChangeEventHandler<T = Element> = React.ChangeEventHandler<T>
  type FormEventHandler<T = Element> = React.FormEventHandler<T>
  type MouseEventHandler<T = Element> = React.MouseEventHandler<T>
  type KeyboardEventHandler<T = Element> = React.KeyboardEventHandler<T>
  type EventHandler<E extends SyntheticEvent<any, any>> = React.EventHandler<E>
}

export {}
