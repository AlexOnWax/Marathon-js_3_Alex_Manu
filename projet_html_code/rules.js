let btn_paper = document.querySelector('.rules-btn')
let rules = document.querySelector('aside')

let close_rules = document.querySelector('aside img:nth-of-type(2)')

btn_paper.addEventListener('click', () => {
    //rules.classList.add('close-rules')
    close_rules.classList.add('close-rules')
    rules.style.zIndex="0";
    rules.style.opacity="100";
    
})

close_rules.addEventListener('click', () => {
    rules.style.zIndex="-1"
    rules.style.opacity="0"
})