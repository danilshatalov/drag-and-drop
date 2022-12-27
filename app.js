const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('drop', dragdrop)
}

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)


function dragstart(e) {
    e.target.classList.add('hold')
    setTimeout(() => e.target.classList.add('hide'), 0)
}

function dragend(e) {
    e.target.classList.remove('hold', 'hide')
}

function dragleave(e) {
    e.target.classList.remove('hovered')
}

function dragenter(e) {
    e.target.classList.add('hovered')
}

function dragover(e) {
    e.preventDefault()
}

function dragdrop(e) {
    e.target.classList.remove('hovered')
    e.target.append(item)
}