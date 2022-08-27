import {
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from 'react-hook-form';

export interface FieldErrorDTO {
  error?: Merge<FieldError, FieldErrorsImpl<DeepRequired<any>>>;
}
