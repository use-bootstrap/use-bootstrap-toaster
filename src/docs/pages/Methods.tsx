import { onMount } from 'solid-js'
import prism from 'prismjs'
import pkg from '../../../package.json'

const codeMethodsHide = `import toast from '${pkg.name}'

const example = toast({
  body: 'Event has been created',
  autohide: false,
})

setTimeout(() => {
  example.hide()
}, 1000)`

const codeMethodsHideAll = `import toast from '${pkg.name}'

toast.hide() // hide all toasts`

export default function Methods() {
  onMount(() => {
    prism.highlightAll()
  })

  return (
    <div>
      <h2 class="fw-bold mb-4">Methods</h2>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Params</th>
              <th>Returns</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>hide</code></td>
              <td><code>null</code></td>
              <td><code>void</code></td>
              <td>
                <pre class="mb-0"><code class="language-javascript">{codeMethodsHide}</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>hide</code></td>
              <td><code>null</code></td>
              <td><code>void</code></td>
              <td>
                <pre class="mb-0"><code class="language-javascript">{codeMethodsHideAll}</code></pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
