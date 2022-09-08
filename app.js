const zoombtn = document.querySelectorAll('.zoom-text');
const allimages = document.querySelectorAll('.img-container');
const imageview = document.querySelector('.image-view');
const prevbtn = document.getElementById('prev-btn');
const nextbtn = document.getElementById('next-btn');
const imagebox = document.querySelector('.image-box');

let currentImageIdx = 0;

zoombtn.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        imageview.style.display = 'block';
        imagebox.style.display = 'block';

        currentImageIdx = index + 1;
        console.log(currentImageIdx);
        currentImageDisplay(currentImageIdx);
    });
});

function currentImageDisplay(){
    imagebox.style.background = `url(imgs/img${currentImageIdx}.jpg)
     no-repeat center/cover`;
}

prevbtn.addEventListener('click',()=>{
    currentImageIdx --;
    if(currentImageIdx === 0){
        currentImageIdx = allimages.length;
    }
    currentImageDisplay(currentImageIdx);
});

nextbtn.addEventListener('click',()=>{
    currentImageIdx ++;
    if(currentImageIdx === allimages.length +1){
        currentImageIdx = 0;
    }
    currentImageDisplay(currentImageIdx);

});