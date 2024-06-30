import type library from './lib/use-bootstrap-toaster'

declare global {
  interface Window {
    toast: typeof library
  }
  const toast: typeof library
}
