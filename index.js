// TeamTask Gallery
const teamTaskImagesTrigger = document.querySelector('#teamtasktrigger');
teamTaskImagesTrigger.addEventListener('click', (e) => {
    e.preventDefault()
    SimpleLightbox.open({
        items: [ 'img/projects/teamtask/2.png', 'img/projects/teamtask/3.png']
    });
    
})




// MisNotisPreview 
const misnotispreviewtrigger = document.querySelector('#misnotispreviewtrigger');
misnotispreviewtrigger.addEventListener('click', (e) => {
  e.preventDefault()
  const misnotispreviewimg = document.querySelector('#misnotispreviewimg');
     SimpleLightbox.open({
       items: ['img/projects/teamtask/2.png']
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