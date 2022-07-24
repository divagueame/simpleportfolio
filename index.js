// TeamTask Gallery
const teamTaskImagesTrigger = document.querySelector('#teamtasktrigger');
teamTaskImagesTrigger.addEventListener('click', (e) => {
    e.preventDefault()
    SimpleLightbox.open({
        items: ['img/projects/teamtask/1.gif', 'img/projects/teamtask/2.png', 'img/projects/teamtask/3.png']
    });
    
})




// HoverGallery
// TeamTask Gallery
const misnotispreview = document.querySelector('#misnotispreview');
misnotispreview.addEventListener('mouseover', (e) => {
  console.log('chick')
    e.preventDefault()
    SimpleLightbox.open({
        items: ['img/projects/teamtask/1.gif', 'img/projects/teamtask/2.png', 'img/projects/teamtask/3.png']
    });
    
})
















// Scroll
  let scrollpos = window.scrollY
  const header = document.querySelector("header")
  const header_height = header.offsetHeight

  const add_class_on_scroll = () => header.classList.add("fixed")
  const remove_class_on_scroll = () => header.classList.remove("fixed")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    console.log(scrollpos)
  })