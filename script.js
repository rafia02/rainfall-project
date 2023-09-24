document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('sliders').appendChild(lists[0]);
}
document.getElementById('previous').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('sliders').prepend(lists[lists.length - 1]);
}