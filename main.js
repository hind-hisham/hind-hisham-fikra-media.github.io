let balloon =document.getElementById('balloon');
    // let bf =document.getElementById('bf');
    let lamp =document.getElementById('lamp');
    let palette =document.getElementById('palette');
    let sec1 =document.querySelector('.s1');
    let div1 =document.querySelector('.s1 div');
    let sec2 =document.querySelector('.s2');
    let div2 =document.querySelector('.s2 div');
    let sec3 =document.querySelector('.s3');
    let videoDiv=document.querySelector('.logo-video')
    let w1=document.querySelector('.w1');
    let w2=document.querySelector('.w2');
    let w3=document.querySelector('.w3');
    let w4=document.querySelector('.w4');
    let w5=document.querySelector('.w5');
    let w6=document.querySelector('.w6');
    let sec4 =document.querySelector('.s4');
    let faounder=document.querySelector('.faounder');
    let about=document.querySelector('.about-us');
    let circal =document.querySelector('.circal');
    let balloon2 =document.querySelector('.balloon2');
    let bird2 =document.querySelector('.bird2');
    let lamp2 =document.querySelector('.lamp2');
    let palette2 =document.querySelector('.palette2');
    let sec5 =document.querySelector('.s5');
    let logo =document.querySelector('.logo-h');
    let logoSqu =document.querySelector('.logo-squ');

    window.addEventListener('scroll',function(){
        let v=window.scrollY;
        lamp.style.translate = v *-0.039 +'px';
        palette.style.translate=v * 0.07 +'px' +' ' +v * -0.045 +'px';
        balloon.style.translate= v * 0.1 +'px'+' ' +v * -0.25 +'px';
        // bf.style.translate= v * 0.25 +'px' +' ' + v * -0.25 +'px';
       

        if(window.scrollY >= sec1.offsetTop -200){
                div1.style.left = 0;
                circal.style.border='10px solid #ced7e6';
            };
            if(window.scrollY >= sec2.offsetTop -200){
          div2.style.right = 0;
          circal.style.border='10px solid #ced7e6';
            }
            if(window.scrollY >= sec3.offsetTop){
          videoDiv.style.opacity=0;
          lamp.style.opacity=0;
          palette.style.opacity=0;
         v=v -2000;
          w1.style.translate= v * -0.25 +'px';
          w1.style.opacity=1;
        w2.style.translate= v * -0.2 +'px';
        w2.style.opacity=1;
        w3.style.translate= v * -0.09 +'px';
        w3.style.opacity=1;
        w4.style.translate=  v * 0.25 +'px';
        w4.style.opacity=1;
        w5.style.translate=  v * 0.2 +'px';
        w5.style.opacity=1;
        w6.style.translate=  v * 0.09 +'px';
        w6.style.opacity=1;
        circal.style.border='10px solid #ced7e6';
          
            }else{
        lamp.style.opacity=1;
        palette.style.opacity=1;
          videoDiv.style.opacity=1;
          w1.style.translate= 0+'px';
          w1.style.opacity=0;
        w2.style.translate= 0+'px';
        w2.style.opacity=0;
        w3.style.translate= 0+'px';
        w3.style.opacity=0;
        w4.style.translate=  0+'px';
        w4.style.opacity=0;
        w5.style.translate=  0+'px';
        w5.style.opacity=0;
        w6.style.translate=  0+'px';
        w6.style.opacity=0;
        circal.style.border='10px solid #ced7e6';
            }
            if(window.scrollY >= sec4.offsetTop -300){
                w1.style.opacity=0;
                w2.style.opacity=0;
                w3.style.opacity=0;
                w4.style.opacity=0;
                w5.style.opacity=0;
                w6.style.opacity=0;
                circal.style.border='10px solid #ced7e6';

            }
            
            else if(window.scrollY >= sec3.offsetTop) {
                w1.style.opacity=1;
                w2.style.opacity=1;
                w3.style.opacity=1;
                w4.style.opacity=1;
                w5.style.opacity=1;
                w6.style.opacity=1;
                circal.style.border='10px solid #ced7e6';
            }
            if(window.scrollY >= sec4.offsetTop -300){
                about.style.right = 0;
                faounder.style.left=0;
                circal.style.border='10px solid #1e1e1e';

            }else if (window.scrollY < sec4.offsetTop){
                circal.style.border='10px solid #ced7e6';
                about.style.right = '-50%';
                faounder.style.left='-50%';
            }
            if(window.scrollY >= sec5.offsetTop - 200){
                bird2.style.right= bird2.dataset.show;
                lamp2.style.right= lamp2.dataset.show;
                palette2.style.left= palette2.dataset.show;
                balloon2.style.left= balloon2.dataset.show;
                circal.style.border='10px solid #fff6ed';
            }
            else{
                bird2.style.right= '-200px';
                lamp2.style.right= '-200px';
                palette2.style.left= '-200px';
                balloon2.style.left= '-200px';
            }
    })
    