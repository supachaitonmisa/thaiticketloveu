const tags = document.querySelectorAll(".events-all .tag")
console.log('tags: ', tags);
// tags
for (const el of tags) {
    console.log('el: ', el);
    // if (Object.prototype.hasOwnProperty.call(el)) {
        const tag = el;
        tag.addEventListener('click', (e)=>{
            console.log('e: ', e);
            console.log('click: ');
            e.currentTarget.classList.toggle("active")
        })
    // }
}
// console.log('tags: ', tags);