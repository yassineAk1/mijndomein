// Sidebar scroll-spy: marks the link of the section in view with aria-current.
// The CSS turns that into the active dot and the filled line.
// Progressive enhancement: without JavaScript the links still work as anchors.
(() => {
  const links = document.querySelectorAll('.step__link')
  if (!links.length || !('IntersectionObserver' in window)) return

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        for (const link of links) {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location')
          else link.removeAttribute('aria-current')
        }
      }
    },
    // A section counts as "in view" when it crosses a thin band at ~40% of the screen height
    { rootMargin: '-40% 0px -55% 0px' },
  )

  for (const id of ['top', ...Array.from(links, (link) => link.hash.slice(1))]) {
    const section = document.getElementById(id)
    if (section) observer.observe(section)
  }
})()
