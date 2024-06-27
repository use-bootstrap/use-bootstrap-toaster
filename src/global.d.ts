import type library, { OptionalType, Options } from './lib/use-bootstrap-toaster'

declare global {
  interface Window {
    toast: typeof library
    UseBootstrapToasterOptions: OptionalType<Options>
  }
  const toast: typeof library
}
