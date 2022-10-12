if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
     navigator.serviceWorker.register('sw.js')
     .then((registration) => {
       console.log("Service Worker registration successful")
      }, (err) => {
       console.log("Registration failed")
      })
     })
}