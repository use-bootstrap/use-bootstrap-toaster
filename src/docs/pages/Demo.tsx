import type { JSX } from 'solid-js'
import { onMount } from 'solid-js'
import prism from 'prismjs'
import Toast from 'bootstrap/js/dist/toast'
import toast from '../../lib/use-bootstrap-toaster.tsx'
import codeBasicDefault from '../code/basic-default.js.txt?raw'
import codeBasicCustom from '../code/basic-custom.js.txt?raw'
import codeHeaderSimple from '../code/header-simple.js.txt?raw'
import codeHeaderObject from '../code/header-object.js.txt?raw'
import codeHeaderCustom from '../code/header-custom.js.txt?raw'
import codePlacementTopLeft from '../code/placement-top-left.js.txt?raw'
import codePlacementBottomLeft from '../code/placement-bottom-left.js.txt?raw'
import codePlacementBottomRight from '../code/placement-bottom-right.js.txt?raw'
import codeOptionsNoAnimation from '../code/options-no-animation.js.txt?raw'
import codeOptionsNoAutohide from '../code/options-no-autohide.js.txt?raw'
import codeOptionsDelay from '../code/options-delay.js.txt?raw'
import codeOptionsGap from '../code/options-gap.js.txt?raw'
import codeOptionsMargin from '../code/options-margin.js.txt?raw'
import codeSchemePrimary from '../code/scheme-primary.js.txt?raw'
import codeSchemeSecondary from '../code/scheme-secondary.js.txt?raw'
import codeSchemeSuccess from '../code/scheme-success.js.txt?raw'
import codeSchemeDanger from '../code/scheme-danger.js.txt?raw'
import codeSchemeWarning from '../code/scheme-warning.js.txt?raw'
import codeSchemeInfo from '../code/scheme-info.js.txt?raw'
import codeSchemeDark from '../code/scheme-dark.js.txt?raw'
import codeSchemeLight from '../code/scheme-light.js.txt?raw'
import codeMethodsHide from '../code/methods-hide.js.txt?raw'
import codeMethodsHideAll from '../code/methods-hide-all.js.txt?raw'

(window as any).bootstrap = {
  Toast,
}

export default function Demo() {
  const body = 'Event has been created'
  function basicDefault() {
    toast(body)
  }
  function basicCustom() {
    toast(`<strong>Success!</strong> ${body}`)
  }
  function headerSimple() {
    toast({
      header: 'Success',
      body,
    })
  }
  function headerObject() {
    toast({
      header: {
        icon: '<svg width="1.5em" height="1.5em" class="text-success me-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
        title: 'Success',
        ago: '11 mins ago',
        closeBtn: true,
      },
      body,
    })
  }
  function headerCustom() {
    toast({
      header: '<strong class="me-auto">Event has been created</strong><button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="toast">Close</button>',
      body: 'Monday, January 3rd at 6:00pm',
    })
  }
  function placementTopLeft() {
    toast({
      body,
      placement: 'top-left',
    })
  }
  function placementBottomLeft() {
    toast({
      body,
      placement: 'bottom-left',
    })
  }
  function placementBottomRight() {
    toast({
      body,
      placement: 'bottom-right',
    })
  }
  function optionsNoAnimation() {
    toast({
      body,
      animation: false,
    })
  }
  function optionsNoAutohide() {
    toast({
      header: {
        title: 'Success',
        closeBtn: true,
      },
      body,
      autohide: false,
    })
  }
  function optionsDelay() {
    toast({
      body,
      delay: 1000,
    })
  }
  function optionsGap() {
    toast({
      body,
      gap: 64,
      delay: 1000,
    })
  }
  function optionsMargin() {
    toast({
      body,
      margin: '5rem',
      delay: 1000,
    })
  }
  function scheme(scheme: string, dark = true) {
    toast({
      classes: `text-bg-${scheme} border-0`,
      body: `
      <div class="d-flex w-100"${dark ? ' data-bs-theme="dark"' : ''}>
        <div class="flex-grow-1">
        Hello, world! This is a toast message.
        </div>
        <button type="button" class="btn-close flex-shrink-0" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>`,
    })
  }
  function schemePrimary() {
    scheme('primary')
  }
  function schemeSecondary() {
    scheme('secondary')
  }
  function schemeSuccess() {
    scheme('success')
  }
  function schemeDanger() {
    scheme('danger')
  }
  function schemeWarning() {
    scheme('warning', false)
  }
  function schemeInfo() {
    scheme('info', false)
  }
  function schemeDark() {
    scheme('dark')
  }
  function schemeLight() {
    scheme('light', false)
  }
  function methodsHide() {
    const example = toast({
      body,
      autohide: false,
    })
    setTimeout(() => {
      example.hide()
    }, 1000)
  }
  function methodsHideAll() {
    toast.hide()
  }

  return (
    <div>
      <h2 class="fw-bold mb-4">Demo</h2>
      <div class="row g-4">
        <Col title="Basic">
          <ul class="nav nav-pills" id="basicTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button onclick={basicDefault} class="nav-link active" id="basic-default-tab" data-bs-toggle="tab" data-bs-target="#basic-default-tab-pane" type="button" role="tab" aria-controls="basic-default-tab-pane" aria-selected="true">Default</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={basicCustom} class="nav-link" id="basic-custom-tab" data-bs-toggle="tab" data-bs-target="#basic-custom-tab-pane" type="button" role="tab" aria-controls="basic-custom-tab-pane" aria-selected="false">Custom</button>
            </li>
          </ul>
          <div class="tab-content mt-3" id="basicTabContent">
            <div class="tab-pane show active" id="basic-default-tab-pane" role="tabpanel" aria-labelledby="basic-default-tab" tabindex="0">
              <Code>{codeBasicDefault}</Code>
            </div>
            <div class="tab-pane" id="basic-custom-tab-pane" role="tabpanel" aria-labelledby="basic-custom-tab" tabindex="0">
              <Code>{codeBasicCustom}</Code>
            </div>
          </div>
        </Col>
        <Col title="Header">
          <ul class="nav nav-pills" id="headerTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button onclick={headerSimple} class="nav-link active" id="header-default-tab" data-bs-toggle="tab" data-bs-target="#header-default-tab-pane" type="button" role="tab" aria-controls="header-default-tab-pane" aria-selected="true">Simple</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={headerObject} class="nav-link" id="header-object-tab" data-bs-toggle="tab" data-bs-target="#header-object-tab-pane" type="button" role="tab" aria-controls="header-object-tab-pane" aria-selected="false">Object</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={headerCustom} class="nav-link" id="header-custom-tab" data-bs-toggle="tab" data-bs-target="#header-custom-tab-pane" type="button" role="tab" aria-controls="header-custom-tab-pane" aria-selected="false">Custom</button>
            </li>
          </ul>
          <div class="tab-content mt-3" id="headerTabContent">
            <div class="tab-pane show active" id="header-default-tab-pane" role="tabpanel" aria-labelledby="header-default-tab" tabindex="0">
              <Code>{codeHeaderSimple}</Code>
            </div>
            <div class="tab-pane" id="header-object-tab-pane" role="tabpanel" aria-labelledby="header-object-tab" tabindex="0">
              <Code>{codeHeaderObject}</Code>
            </div>
            <div class="tab-pane" id="header-custom-tab-pane" role="tabpanel" aria-labelledby="header-custom-tab" tabindex="0">
              <Code>{codeHeaderCustom}</Code>
            </div>
          </div>
        </Col>
        <Col title="Placement">
          <ul class="nav nav-pills" id="placementTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button onclick={placementTopLeft} class="nav-link active" id="placement-top-left-tab" data-bs-toggle="tab" data-bs-target="#placement-top-left-tab-pane" type="button" role="tab" aria-controls="placement-top-left-tab-pane" aria-selected="true">TopLeft</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={placementBottomLeft} class="nav-link" id="placement-bottom-left-tab" data-bs-toggle="tab" data-bs-target="#placement-bottom-left-tab-pane" type="button" role="tab" aria-controls="placement-bottom-left-tab-pane" aria-selected="false">BottomLeft</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={placementBottomRight} class="nav-link" id="placement-bottom-right-tab" data-bs-toggle="tab" data-bs-target="#placement-bottom-right-tab-pane" type="button" role="tab" aria-controls="placement-bottom-right-tab-pane" aria-selected="false">BottomRight</button>
            </li>
          </ul>
          <div class="tab-content mt-3" id="placementTabContent">
            <div class="tab-pane show active" id="placement-top-left-tab-pane" role="tabpanel" aria-labelledby="placement-top-left-tab" tabindex="0">
              <Code>{codePlacementTopLeft}</Code>
            </div>
            <div class="tab-pane" id="placement-bottom-left-tab-pane" role="tabpanel" aria-labelledby="placement-bottom-left-tab" tabindex="0">
              <Code>{codePlacementBottomLeft}</Code>
            </div>
            <div class="tab-pane" id="placement-bottom-right-tab-pane" role="tabpanel" aria-labelledby="placement-bottom-right-tab" tabindex="0">
              <Code>{codePlacementBottomRight}</Code>
            </div>
          </div>
        </Col>
        <Col title="Option" className="col-12 col-lg-6 col-xxl-4">
          <ul class="nav nav-pills" id="optionsTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button onclick={optionsNoAnimation} class="nav-link active" id="options-no-animation-tab" data-bs-toggle="tab" data-bs-target="#options-no-animation-tab-pane" type="button" role="tab" aria-controls="options-no-animation-tab-pane" aria-selected="true">NoAnimation</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={optionsNoAutohide} class="nav-link" id="options-no-autohide-tab" data-bs-toggle="tab" data-bs-target="#options-no-autohide-tab-pane" type="button" role="tab" aria-controls="options-no-autohide-tab-pane" aria-selected="false">NoAutohide</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={optionsDelay} class="nav-link" id="options-delay-tab" data-bs-toggle="tab" data-bs-target="#options-delay-tab-pane" type="button" role="tab" aria-controls="options-delay-tab-pane" aria-selected="false">Delay</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={optionsGap} class="nav-link" id="options-gap-tab" data-bs-toggle="tab" data-bs-target="#options-gap-tab-pane" type="button" role="tab" aria-controls="options-gap-tab-pane" aria-selected="false">Gap</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={optionsMargin} class="nav-link" id="options-margin-tab" data-bs-toggle="tab" data-bs-target="#options-margin-tab-pane" type="button" role="tab" aria-controls="options-margin-tab-pane" aria-selected="false">Margin</button>
            </li>
          </ul>
          <div class="tab-content mt-3" id="optionsTabContent">
            <div class="tab-pane show active" id="options-no-animation-tab-pane" role="tabpanel" aria-labelledby="options-no-animation-tab" tabindex="0">
              <Code>{codeOptionsNoAnimation}</Code>
            </div>
            <div class="tab-pane" id="options-no-autohide-tab-pane" role="tabpanel" aria-labelledby="options-no-autohide-tab" tabindex="0">
              <Code>{codeOptionsNoAutohide}</Code>
            </div>
            <div class="tab-pane" id="options-delay-tab-pane" role="tabpanel" aria-labelledby="options-delay-tab" tabindex="0">
              <Code>{codeOptionsDelay}</Code>
            </div>
            <div class="tab-pane" id="options-gap-tab-pane" role="tabpanel" aria-labelledby="options-gap-tab" tabindex="0">
              <Code>{codeOptionsGap}</Code>
            </div>
            <div class="tab-pane" id="options-margin-tab-pane" role="tabpanel" aria-labelledby="options-margin-tab" tabindex="0">
              <Code>{codeOptionsMargin}</Code>
            </div>
          </div>
        </Col>
        <Col title="Color schemes" className="col-12 col-xxl-8">
          <ul class="nav nav-pills" id="schemeTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button onclick={schemePrimary} class="nav-link active" id="scheme-primary-tab" data-bs-toggle="tab" data-bs-target="#scheme-primary-tab-pane" type="button" role="tab" aria-controls="scheme-primary-tab-pane" aria-selected="true">Primary</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={schemeSecondary} class="nav-link" id="scheme-secondary-tab" data-bs-toggle="tab" data-bs-target="#scheme-secondary-tab-pane" type="button" role="tab" aria-controls="scheme-secondary-tab-pane" aria-selected="false">Secondary</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={schemeSuccess} class="nav-link" id="scheme-success-tab" data-bs-toggle="tab" data-bs-target="#scheme-success-tab-pane" type="button" role="tab" aria-controls="scheme-success-tab-pane" aria-selected="false">Success</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={schemeDanger} class="nav-link" id="scheme-danger-tab" data-bs-toggle="tab" data-bs-target="#scheme-danger-tab-pane" type="button" role="tab" aria-controls="scheme-danger-tab-pane" aria-selected="false">Danger</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={schemeWarning} class="nav-link" id="scheme-warning-tab" data-bs-toggle="tab" data-bs-target="#scheme-warning-tab-pane" type="button" role="tab" aria-controls="scheme-warning-tab-pane" aria-selected="false">Warning</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={schemeInfo} class="nav-link" id="scheme-info-tab" data-bs-toggle="tab" data-bs-target="#scheme-info-tab-pane" type="button" role="tab" aria-controls="scheme-info-tab-pane" aria-selected="false">Info</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={schemeDark} class="nav-link" id="scheme-dark-tab" data-bs-toggle="tab" data-bs-target="#scheme-dark-tab-pane" type="button" role="tab" aria-controls="scheme-dark-tab-pane" aria-selected="false">Dark</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={schemeLight} class="nav-link" id="scheme-light-tab" data-bs-toggle="tab" data-bs-target="#scheme-light-tab-pane" type="button" role="tab" aria-controls="scheme-light-tab-pane" aria-selected="false">Light</button>
            </li>
          </ul>
          <div class="tab-content mt-3" id="schemeTabContent">
            <div class="tab-pane show active" id="scheme-primary-tab-pane" role="tabpanel" aria-labelledby="scheme-primary-tab" tabindex="0">
              <Code>{codeSchemePrimary}</Code>
            </div>
            <div class="tab-pane" id="scheme-secondary-tab-pane" role="tabpanel" aria-labelledby="scheme-secondary-tab" tabindex="0">
              <Code>{codeSchemeSecondary}</Code>
            </div>
            <div class="tab-pane" id="scheme-success-tab-pane" role="tabpanel" aria-labelledby="scheme-success-tab" tabindex="0">
              <Code>{codeSchemeSuccess}</Code>
            </div>
            <div class="tab-pane" id="scheme-danger-tab-pane" role="tabpanel" aria-labelledby="scheme-danger-tab" tabindex="0">
              <Code>{codeSchemeDanger}</Code>
            </div>
            <div class="tab-pane" id="scheme-warning-tab-pane" role="tabpanel" aria-labelledby="scheme-warning-tab" tabindex="0">
              <Code>{codeSchemeWarning}</Code>
            </div>
            <div class="tab-pane" id="scheme-info-tab-pane" role="tabpanel" aria-labelledby="scheme-info-tab" tabindex="0">
              <Code>{codeSchemeInfo}</Code>
            </div>
            <div class="tab-pane" id="scheme-dark-tab-pane" role="tabpanel" aria-labelledby="scheme-dark-tab" tabindex="0">
              <Code>{codeSchemeDark}</Code>
            </div>
            <div class="tab-pane" id="scheme-light-tab-pane" role="tabpanel" aria-labelledby="scheme-light-tab" tabindex="0">
              <Code>{codeSchemeLight}</Code>
            </div>
          </div>
        </Col>
        <Col title="Methods">
          <ul class="nav nav-pills" id="methodsTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button onclick={methodsHide} class="nav-link active" id="methods-hide-tab" data-bs-toggle="tab" data-bs-target="#methods-hide-tab-pane" type="button" role="tab" aria-controls="methods-hide-tab-pane" aria-selected="true">Hide a toast</button>
            </li>
            <li class="nav-item" role="presentation">
              <button onclick={methodsHideAll} class="nav-link" id="methods-hide-all-tab" data-bs-toggle="tab" data-bs-target="#methods-hide-all-tab-pane" type="button" role="tab" aria-controls="methods-hide-all-tab-pane" aria-selected="false">Hide all toasts</button>
            </li>
          </ul>
          <div class="tab-content mt-3" id="methodsTabContent">
            <div class="tab-pane show active" id="methods-hide-tab-pane" role="tabpanel" aria-labelledby="methods-hide-tab" tabindex="0">
              <Code>{codeMethodsHide}</Code>
            </div>
            <div class="tab-pane" id="methods-hide-all-tab-pane" role="tabpanel" aria-labelledby="methods-hide-all-tab" tabindex="0">
              <Code>{codeMethodsHideAll}</Code>
            </div>
          </div>
        </Col>
      </div>
    </div>
  )
}

function Col(prop: ColProps) {
  return (
    <div class={prop.className ?? 'col-12 col-lg-6 col-xxl-4'}>
      <div class="card h-100">
        <div class="card-header">{prop.title}</div>
        <div class="card-body">
          {prop.children}
        </div>
      </div>
    </div>
  )
}

interface ColProps {
  children: JSX.Element
  title: string
  className?: string
}

function Code(prop: { children: JSX.Element }) {
  onMount(() => {
    prism.highlightAll()
  })
  return (
    <div class="overflow-auto w-100">
      <pre><code class="language-js">{prop.children}</code></pre>
    </div>
  )
}
