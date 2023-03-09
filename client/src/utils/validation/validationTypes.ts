import { FieldError } from 'react-hook-form'

export type FormErrors<T> = {
  [key in keyof T]?: FieldError
}
