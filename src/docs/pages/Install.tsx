import { onMount } from 'solid-js'
import prism from 'prismjs'
import pkg from '../../../package.json'

export default function Install() {
  const cdnJs = `<script src="https://cdn.jsdelivr.net/npm/${pkg.name}@${pkg.version}/dist/${pkg.name}.min.js"></script>`

  // Install
  const codeInstall = `npm install ${pkg.name}`

  // Import
  const codeImport = `import ${pkg.libName} from '${pkg.name}'`

  // IIFE
  const codeIife = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Example</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@${pkg.devDependencies.bootstrap}/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@${pkg.devDependencies.bootstrap}/dist/js/bootstrap.bundle.min.js"></script>
    <script src="node_modules/${pkg.name}/dist/${pkg.name}.min.js"></script>
  </head>
  <body>
    <button id="example" class="btn btn-primary" type="button">example</button>
    <script>
      document.getElementById('example').addEventListener('click', () => {
        ${pkg.libName}('Hello, world! This is a toast message.')
      })
    </script>
  </body>
</html>`

  // Cdn
  const codeCdn = `${cdnJs}`

  // Cdn example
  const codeCdnExample = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Example</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@${pkg.devDependencies.bootstrap}/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@${pkg.devDependencies.bootstrap}/dist/js/bootstrap.bundle.min.js"></script>
    ${cdnJs}
  </head>
  <body>
    <button id="example" class="btn btn-primary" type="button">example</button>
    <script>
      document.getElementById('example').addEventListener('click', () => {
        ${pkg.libName}('Hello, world! This is a toast message.')
      })
    </script>
  </body>
</html>`

  onMount(() => {
    prism.highlightAll()
  })

  return (
    <div>
      <h2 class="fw-bold mb-4">Install</h2>
      <h5>Install from npm:</h5>
      <ol>
        <li>
          <p>Run the following command in the terminal:</p>
          <pre><code class="language-bash">{codeInstall}</code></pre>
        </li>
        <li>
          <p>After installation, you can import the library into your project as follows:</p>
          <pre><code class="language-javascript">{codeImport}</code></pre>
        </li>
        <li>
          <p>Or, since it also comes with an IIFE bundle, you can insert it directly into your HTML:</p>
          <pre><code class="language-html">{codeIife}</code></pre>
        </li>
      </ol>
      <h5>Install from cdn:</h5>
      <ol>
        <li>
          <p>Add the following script in the <code>&lt;head&gt;</code> tag of your HTML:</p>
          <pre><code class="language-html">{codeCdn}</code></pre>
          <p>Example:</p>
          <pre><code class="language-html">{codeCdnExample}</code></pre>
        </li>
      </ol>
    </div>
  )
}
