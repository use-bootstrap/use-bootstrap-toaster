const example = toast({
  body: 'Event has been created',
  autohide: false,
})

setTimeout(() => {
  example.hide()
}, 1000)
