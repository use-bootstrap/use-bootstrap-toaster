type Toast = any

const defaultOptions: Options = {
  animation: true,
  autohide: true,
  delay: 4000,
  gap: 16,
  margin: '1rem',
  placement: 'top-right',
  classes: '',
  body: '',
}

function createElement<T extends keyof HTMLElementTagNameMap>(tagName: T, attributes?: { [K in keyof HTMLElementTagNameMap[T]]?: HTMLElementTagNameMap[T][K] }): HTMLElementTagNameMap[T] {
  const element = document.createElement(tagName)
  return Object.assign(element, attributes)
}

function stack(placement: Options['placement'], gap: number) {
  const toasts = document.body.querySelectorAll<HTMLDivElement>(`:scope > .toast-${placement}`)
  const pos = placement.split('-')
  const vPosition = pos[0] as 'top' | 'bottom'
  const yAxis: number[] = []
  toasts.forEach((el, index) => {
    index === 0 && yAxis.push(0)
    if (toasts[index + 1] instanceof HTMLElement) {
      yAxis.push(yAxis[index] + el.offsetHeight) // next toast position = current element position + current element height
    }
    el.style[vPosition] = `${yAxis[index] + (gap * index)}px`
  })
}

function getToaster(BootstrapToast?: Toast) {
  return BootstrapToast || (window as any).bootstrap?.Toast as Toast
}

interface ToastFunction<T extends any[], R> {
  (...args: T): R
  /**
   * Hide all toasts
   */
  hide: (BootstrapToast?: Toast) => void
}

const toast: ToastFunction<[string | OptionalType<Options>, Toast?], {
  /**
   * Hide current toast
   */
  hide: () => void
}> = (input, BootstrapToast) => {
  const Toaster = getToaster(BootstrapToast)
  if (Toaster === undefined) {
    throw new Error('Bootstrap Toast is not defined.')
  }
  else {
    const { animation, autohide, body, delay, gap, margin, placement, classes, header } = {
      ...defaultOptions,
      ...(window as any).UseBootstrapToasterOptions as Options | undefined,
      ...typeof input === 'string' ? {} : input,
    } as Options
    const pos = placement.split('-')
    const vPosition = pos[0] as 'top' | 'bottom'
    const hPosition = pos[1] as 'left' | 'right'

    // Toast
    const toastElement = createElement('div', {
      className: `use-bootstrap-toaster toast position-fixed toast-${placement} ${classes}`,
      role: 'alert',
      ariaLive: 'assertive',
      ariaAtomic: 'true',
    })
    toastElement.style.margin = margin
    toastElement.style.zIndex = 'var(--bs-toast-zindex)'
    toastElement.style[vPosition] = '0'
    toastElement.style[hPosition] = animation ? '-50%' : '0'

    // Toast header
    if (header !== undefined) {
      const toastHeader = createElement('div', {
        className: 'toast-header',
      })
      if (typeof header === 'string') {
        toastHeader.insertAdjacentHTML('beforeend', header)
      }
      else {
        const { icon, title, ago, closeBtn } = header
        if (icon) {
          toastHeader.insertAdjacentHTML('beforeend', icon)
        }
        if (title) {
          toastHeader.insertAdjacentElement('beforeend', createElement('strong', {
            className: 'me-auto',
            textContent: title,
          }))
        }
        if (ago) {
          toastHeader.insertAdjacentElement('beforeend', createElement('small', {
            textContent: ago,
          }))
        }
        if (closeBtn) {
          const button = createElement('button', {
            type: 'button',
            className: 'btn-close',
            ariaLabel: 'Close',
          })
          button.setAttribute('data-bs-dismiss', 'toast')
          toastHeader.insertAdjacentElement('beforeend', button)
        }
      }
      toastElement.append(toastHeader)
    }

    // Toast body
    toastElement.insertAdjacentElement('beforeend', createElement('div', {
      className: 'toast-body',
      innerHTML: typeof input === 'string' ? input : body,
    }))

    // Init bootstrap toast
    document.body.insertAdjacentElement('afterbegin', toastElement)
    const toast = Toaster.getOrCreateInstance(toastElement, {
      animation,
      autohide,
      delay,
    })

    // Events
    toastElement.addEventListener('hidden.bs.toast', () => {
      toastElement.remove()
      stack(placement, gap)
    })
    toastElement.addEventListener('show.bs.toast', () => {
      const timer = setInterval(myFunction, 0)
      function myFunction() {
        if (toastElement.offsetHeight > 0) { // make sure toastElement has height
          clearInterval(timer)

          if (animation) {
            const transition = Number.parseFloat(getComputedStyle(toastElement).transitionDuration) * 1000
            toastElement.style.transition = `all ${transition * 4}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${transition}ms linear`
            toastElement.style[hPosition] = '0' // slide in
          }
          stack(placement, gap)
        }
      }
    })

    toast.show()

    return {
      hide: () => toast.hide(),
    }
  }
}

toast.hide = (BootstrapToast?: Toast) => {
  const Toaster = getToaster(BootstrapToast)
  if (Toaster === undefined) {
    throw new Error('Bootstrap Toast is not defined.')
  }
  else {
    document.body.querySelectorAll<HTMLDivElement>(':scope > .toast').forEach((el) => {
      const toast = Toaster.getOrCreateInstance(el)
      toast.hide()
    })
  }
}

export default toast

export interface Options {
  animation: boolean
  autohide: boolean
  delay: number
  gap: number
  margin: string
  placement: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  classes?: string
  header?: {
    icon?: string
    title?: string
    ago?: string
    closeBtn?: boolean
  } | string
  body: string
}
export type OptionalType<T> = {
  [P in keyof T]?: T[P]
}
declare global {
  interface Window {
    UseBootstrapToasterOptions: OptionalType<Options>
  }
}
