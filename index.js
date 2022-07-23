// new SimpleLightbox({elements: '.imageGallery1 a'});
const teamTaskImagesTrigger = document.querySelector('#teamtasktrigger');
teamTaskImagesTrigger.addEventListener('click', (e) => {
    e.preventDefault()
    SimpleLightbox.open({
        items: ['img/projects/teamtask/1.gif', 'img/projects/teamtask/2.png', 'img/projects/teamtask/3.png']
    });
    
})
