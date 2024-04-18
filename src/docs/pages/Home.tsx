import { For } from 'solid-js'
import pkg from '../../../package.json'

export default function Home() {
  const badges = [
    {
      src: 'npm/v',
      alt: 'version',
    },
    {
      src: 'bundlephobia/minzip',
      alt: 'minified + gzip',
    },
    {
      src: 'npm/dm',
      alt: 'downloads per month',
    },
    {
      src: 'npm/types',
      alt: 'types',
    },
  ]

  return (
    <div>
      <h3 class="fw-bold">{pkg.name}</h3>
      <p>{pkg.description}</p>
      <div class="d-flex flex-wrap gap-2">
        <For each={badges}>
          {badge => <img src={`https://img.shields.io/${badge.src}/${pkg.name}${badge.src.startsWith('bundle') ? `/${pkg.version}` : ''}`} alt={badge.alt} />}
        </For>
      </div>
      <hr />
      <h4 class="fw-bold">Features</h4>
      <ul class="text-body-secondary">
        <li><b>Custom content</b>: Customize your toasts by adding your own markup.</li>
        <li><b>Placement</b>: Place toasts as you need.</li>
        <li><b>Stacking</b>: Automatically stack your toast.</li>
      </ul>
      <hr />
      <h4 class="fw-bold">Repository</h4>
      <a class="link-body-emphasis" href={pkg.repository} target="_blank">{pkg.repository}</a>
      <hr />
      <h4 class="fw-bold">License</h4>
      {pkg.license}
    </div>
  )
}
