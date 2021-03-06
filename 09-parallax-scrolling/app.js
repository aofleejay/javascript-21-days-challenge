;(() => {
  const onScroll = () => {
    const moonElement = document.querySelector('.moon')
    const wishElement = document.querySelector('.wish')

    moonElement.style.transform = `translate(${window.scrollY * 0.7}%, ${
      window.scrollY * -0.7
    }%)`
    wishElement.style.transform = `translateY(${window.scrollY * -1.8}%)`
  }

  const run = () => {
    document.addEventListener('scroll', onScroll)
  }

  run()
})()
