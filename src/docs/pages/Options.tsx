import { For } from 'solid-js'
import pkg from '../../../package.json'

export default function Options() {
  const options: OptionsProps[] = [
    {
      name: 'animation',
      type: 'boolean',
      default: 'true',
      description: `Apply a CSS fade transition to the toast.`,
    },
    {
      name: 'autohide',
      type: 'boolean',
      default: 'true',
      description: `Automatically hide the toast after the delay.`,
    },
    {
      name: 'delay',
      type: 'number',
      default: '4000',
      description: `Delay in milliseconds before hiding the toast.`,
    },
    {
      name: 'gap',
      type: 'number',
      default: '16',
      description: `Gap between toasts (px).`,
    },
    {
      name: 'margin',
      type: 'string',
      default: `'1rem'`,
      description: `Margin of the corner. Can also be filled with a CSS variable. Example: var(--toast-margin).`,
    },
    {
      name: 'placement',
      type: 'string',
      default: `'top-right'`,
      description: `Corner position of the toast. Available values: <code>top-right</code>, <code>top-left</code>, <code>bottom-right</code>, <code>bottom-left</code>.`,
    },
    {
      name: 'classes',
      type: 'string',
      default: `''`,
      description: `Additional classes to apply to the toast element.`,
    },
    {
      name: 'header',
      type: 'string',
      default: `''`,
      description: `Additional information for the toast header section. It can be an object with properties such as icon, title, ago (time), and close button (closeBtn), or a string for the header title.`,
    },
    {
      name: 'body',
      type: 'string',
      default: `''`,
      description: `The content of the toast message to be displayed to the user.`,
    },
  ]

  return (
    <div>
      <h2 class="fw-bold mb-4">Options</h2>
      <p>
        The global options for <code>{pkg.libName}</code> can be set by assigning an object to the <code>window.UseBootstrapToasterOptions</code> variable, which will apply to all instances of the component.
      </p>
      <p>
        Alternatively, you can customize the options for a specific instance by passing an object directly to the <code>{pkg.libName}</code> function.
      </p>
      <p>
        <code>{pkg.libName}</code> component options prioritizes object options, and finally falls back to global options in the <code>window.UseBootstrapToasterOptions</code> variable.
      </p>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <For each={options}>{config => (
              <tr>
                <td><code>{config.name}</code></td>
                <td>{config.type}</td>
                <td><code>{config.default}</code></td>
                <td innerHTML={config.description}></td>
              </tr>
            )}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  )
}

interface OptionsProps {
  name: string
  type: 'boolean' | 'string' | 'number'
  default: string
  description: string
}
