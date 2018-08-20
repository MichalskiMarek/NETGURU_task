require('./style.css');
require('./style.scss');

document.addEventListener('DOMContentLoaded', function () {

   const stations = document.querySelectorAll('.main__station');
   const stationsActive = document.querySelectorAll('.station__active');
   const currPlaying = document.querySelector('.main__curr-played');
   const currPlayingName = currPlaying.querySelector('.curr__station-name');

   currPlaying.style.display = 'none';
    stationsActive.forEach((e)=>{
        e.style.display = 'none';
    });

   stations.forEach((e,i)=>{
       e.addEventListener('click',()=>{

           if (stationsActive[i].style.display === 'none'){
               stationsActive.forEach((e)=>{
                   e.style.display = 'none';
               });
               stationsActive[i].style.display = 'flex';
               currPlaying.style.display = 'flex';
               currPlayingName.innerText = e.querySelector('.station__name').innerText;
           }
           else if (stationsActive[i].style.display === 'flex') {
               stationsActive[i].style.display = 'none';
               currPlaying.style.display = 'none';
           }

       })
   })

});