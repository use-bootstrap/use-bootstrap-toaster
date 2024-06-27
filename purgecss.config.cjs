module.exports = {
  css: ['docs/assets/*.css'],
  output: 'docs/assets',
  content: ['docs/**/*.{html,js}'],
  safelist: [
    /^use-bootstrap-toaster/,
    'btn-secondary',
    'btn-primary',
    'btn-success',
    'btn-danger',
    'btn-warning',
    'btn-info',
    'btn-dark',
    'btn-light',
  ],
}
