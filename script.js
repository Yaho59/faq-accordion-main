const acordeonQuestions =  document.querySelectorAll(".question");

acordeonQuestions.forEach(item => {
    const buttonShow = item.querySelector('.icon-plus');
    const buttonClose = item.querySelector('.icon-minus')
    const paragraph = item.querySelector(".paragraph");

    buttonClose.addEventListener('click', () => {
        paragraph.style.display = 'none';
        buttonClose.style.display = 'none';
        buttonShow.style.display = 'block';
    })

    buttonShow.addEventListener('click', ()=>{
        paragraph.style.display ='block';
        buttonClose.style.display = 'block';
        buttonShow.style.display = 'none';
    })
})
