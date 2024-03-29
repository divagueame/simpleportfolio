// Hi! Good to see you here!! :)
// TurboNews Gallery
const lpImagesTrigger = document.querySelector('#lptrigger');
lpImagesTrigger.addEventListener('click', (e) => {
    e.preventDefault()
    SimpleLightbox.open({
        items: [
            'img/projects/lp/1.webp',
            'img/projects/lp/2.webp']
    });    
})


// TurboNews Gallery
const turbonewsImagesTrigger = document.querySelector('#turbonewstrigger');
turbonewsImagesTrigger.addEventListener('click', (e) => {
    e.preventDefault()
    SimpleLightbox.open({
        items: [
            'img/projects/turbonews/4.webp',
            'img/projects/turbonews/1.jpg',
            'img/projects/turbonews/1.gif',
            'img/projects/turbonews/2.jpg',
            'img/projects/turbonews/2.gif',
            'img/projects/turbonews/3.jpg',
            'img/projects/turbonews/3.gif']
    });    
})

// TeamTask Gallery
const teamTaskImagesTrigger = document.querySelector('#teamtasktrigger');
teamTaskImagesTrigger.addEventListener('click', (e) => {
    e.preventDefault()
    SimpleLightbox.open({
        items: [
            'img/projects/teamtask/1.gif',
            'img/projects/teamtask/2.jpg',
            'img/projects/teamtask/3.jpg']
    });    
})


// My cat is the best Gallery
const mycatisthebestpreviewtrigger = document.querySelector('#mycatisthebesttrigger');
mycatisthebestpreviewtrigger.addEventListener('click', (e) => {
    e.preventDefault()
    SimpleLightbox.open({
        items: [
            'img/projects/mycatisthebest/1.gif',
            'img/projects/mycatisthebest/2.jpg',
            'img/projects/mycatisthebest/3.jpg']
    });
})


// Sellit - Gallery
const sellitpreviewtrigger = document.querySelector('#sellittrigger');
sellitpreviewtrigger.addEventListener('click', (e) => {
    e.preventDefault()
    SimpleLightbox.open({
        items: [
            'img/projects/sellit/1.webp']
    });
})

// Musicapp - Gallery
const musicapptrigger = document.querySelector('#musicapptrigger');
musicapptrigger.addEventListener('click', (e) => {
    e.preventDefault()
    SimpleLightbox.open({
        items: [
            'img/projects/musicapp/1.webp',
            'img/projects/musicapp/2.webp',
            'img/projects/musicapp/3.webp'
        ]
    });
})

 
// MamboSpanish - Gallery
const mambospanishtrigger = document.querySelector('#mambospanishtrigger');
mambospanishtrigger.addEventListener('click', (e) => {
    e.preventDefault()
    SimpleLightbox.open({
        items: [
            'img/projects/mambospanish/schema.png'
        ]
    });
})


// New Summit - Gallery
const newsummittrigger = document.querySelector('#newsummittrigger');
newsummittrigger.addEventListener('click', (e) => {
    e.preventDefault()
    SimpleLightbox.open({
        items: [
            'img/projects/newsummit/2.gif',
            'img/projects/newsummit/2.gif'
        ]
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

