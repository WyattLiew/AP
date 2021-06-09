// whiteGold watch page
var watchPage_whiteGold_videobtn = document.getElementById("watchPage__whiteGold__video");
var whiteGold_video = document.getElementById("whiteGold__video");
var whiteGold_close = document.getElementById("whiteGold__video-close");

// spec
var watchPage__whiteGold__specbtn = document.getElementById("watchPage__whiteGold__spec");
var watchPage__whiteGold__specBtn1 = document.getElementById("watchPage__whiteGold-specBtn1");
var watchPage__whiteGold__specBtn2 = document.getElementById("watchPage__whiteGold-specBtn2");
var watchPage__whiteGold__specBtn3 = document.getElementById("watchPage__whiteGold-specBtn3");
var watchPage__whiteGold__specBtn4 = document.getElementById("watchPage__whiteGold-specBtn4");
var watchPage__whiteGold__specBtn5 = document.getElementById("watchPage__whiteGold-specBtn5");

// smoke text effect
var smokeText = document.querySelector('.smoke__text');
var smokeTextSpan = document.querySelectorAll('.smoke__text span');

// spec event
watchPage__whiteGold__specbtn.addEventListener("touchstart", handleWhiteGoldPage_spec, false);
watchPage__whiteGold__specBtn1.addEventListener("touchstart", handleWhiteGoldPage_specDetails1, false);
watchPage__whiteGold__specBtn2.addEventListener("touchstart", handleWhiteGoldPage_specDetails2, false);
watchPage__whiteGold__specBtn3.addEventListener("touchstart", handleWhiteGoldPage_specDetails3, false);
watchPage__whiteGold__specBtn4.addEventListener("touchstart", handleWhiteGoldPage_specDetails4, false);
watchPage__whiteGold__specBtn5.addEventListener("touchstart", handleWhiteGoldPage_specDetails5, false);

// Gellery
var watchPage__whiteGold__gallerybtn = document.getElementById("watchPage__whiteGold__gallery");
var whiteGold_galleryClose = document.getElementById("whiteGold__gallery-close");
var watchPage__whiteGold__gallerytoPinkGold =document.getElementById("watchPage__whiteGold__gallerytoPinkGold");
var watchPage__whiteGold__gallerytoWhiteGold =document.getElementById("watchPage__whiteGold__gallerytoWhiteGold");
//Gallery event

watchPage__whiteGold__gallerybtn.addEventListener("touchstart", handleWhiteGoldPage_gallery, false);
watchPage__whiteGold__gallerytoPinkGold.addEventListener("touchstart", handleWhiteGoldPage_galleryToPinkGold, false);
watchPage__whiteGold__gallerytoWhiteGold.addEventListener("touchstart", handleWhiteGoldPage_galleryToWhiteGold, false);
// Video event
watchPage_whiteGold_videobtn.addEventListener("touchstart", handleWhiteGoldPage_video, false);
let clickcount_whitegold_video =0,clickcount_whitegold_spec =0,clickcount_whitegold_gallery=0;
let clickcount_whitegold_galleryToPinkGold =0; clickcount_whitegold_galleryToWhiteGold =0;

// video part
function handleWhiteGoldPage_video(e) {
    if(clickcount_whitegold_spec>=1){
    //no working
    }else{
    if (clickcount_whitegold_gallery <1 && clickcount_whitegold_spec <1 && clickcount_whitegold_video <1) {
     gsap.to('#watchPage__whiteGold__video',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
    gsap.to('.watchPage__whiteGold-Container',{duration:0.5,delay:0.3,display:'none',onComplete: playVideo_whiteGold});
    whiteGold_video.addEventListener('ended',whiteGoldVideoEndHandler,false);
  }
  clickcount_whitegold_video++;
    e.preventDefault();
    e.stopImmediatePropagation();
    return false
}
}

function playVideo_whiteGold() {
    watchPage__whiteGold_spec.style.display= "none";
    whiteGold_video.style.display="block";
    whiteGold_close.style.position="absolute";
    whiteGold_close.style.display="block";
    whiteGold_video.play();
}

function whiteGoldVideoEndHandler(e) {
    gsap.to('.watchPage__whiteGold-Container',{duration:2,display:'block',onComplete: completedVideo_whiteGold});
    whiteGold_close.style.display="none";
    whiteGold_video.style.display="none";
    watchPage__whiteGold_spec.style.display= "none";
    gsap.to('#watchPage__whiteGold-Scene',{duration:0.5,opacity:1});
    gsap.to('#watchPage__whiteGold__video',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    gsap.to('#watchPage__whiteGold__spec',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    gsap.to('#watchPage__whiteGold__gallery',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
};

function completedVideo_whiteGold() {
    clickcount_whitegold_video = 0
    clickcount_whitegold_spec = 0
    clickcount_whitegold_gallery = 0;
    clearWhiteGoldSpec();
}

// close video
whiteGold_close.addEventListener("touchstart", function closeVideo(){
    whiteGold_close.style.display="none";
    whiteGold_video.pause();
    whiteGold_video.currentTime = 0;
    whiteGoldVideoEndHandler();
});

// clear spec
function clearWhiteGoldSpec() {
    gsap.to('#whiteGold__spec-1',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn1',{duration:0.3,opacity:0});
    gsap.to('#whiteGold__spec-2',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn2',{duration:0.3,opacity:0});
    gsap.to('#whiteGold__spec-3',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn3',{duration:0.3,opacity:0});
    gsap.to('#whiteGold__spec-4',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn4',{duration:0.3,opacity:0});
    gsap.to('#whiteGold__spec-5',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn5',{duration:0.3,opacity:0});
}

// spec
function handleWhiteGoldPage_spec(e) {
    if (clickcount_whitegold_gallery <1 && clickcount_whitegold_spec <1 && clickcount_whitegold_video <1) {
     gsap.to('#watchPage__whiteGold__spec',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
    gsap.to('#watchPage__whiteGold-Scene',{duration:0.5,delay:0.3,opacity:0,onComplete: showSpec_whiteGold});
  }
  clickcount_whitegold_spec++;
    e.preventDefault();
    e.stopImmediatePropagation();
    return false
}

function showSpec_whiteGold() {
    clickcount_whitegold_spec =1;
    gsap.to('#watchPage__whiteGold-spec',{duration:1,display:'block',onComplete:showPoint_whiteGold});
}

function showPoint_whiteGold() {
    gsap.fromTo('#watchPage__whiteGold-specBtn1',{opacity:0},{duration:1,opacity:0.8});
    gsap.fromTo('#watchPage__whiteGold-specBtn2',{opacity:0},{duration:1,delay:0.2,opacity:0.8});
    gsap.fromTo('#watchPage__whiteGold-specBtn3',{opacity:0},{duration:1,delay:0.4,opacity:0.8});
    gsap.fromTo('#watchPage__whiteGold-specBtn4',{opacity:0},{duration:1,delay:0.6,opacity:0.8});
    gsap.fromTo('#watchPage__whiteGold-specBtn5',{opacity:0},{duration:1,delay:0.8,opacity:0.8});
    clickcount_whitegold_spec =0;
}

// spec details
function handleWhiteGoldPage_specDetails1() {
    gsap.to('#whiteGold__spec-1',{duration:0.3,opacity:1});
    gsap.fromTo('.solidLine',{opacity:0,width:'0%'},{duration:1,opacity:1,width:'50%'});
    gsap.fromTo('.whiteGold__spec-1-text',{rotationX:"-90deg"},{duration:1,rotationX:"0deg"});
    gsap.fromTo('#watchPage__whiteGold-specBtn1',{opacity:1},{duration:0.5,delay:0.3,opacity:0});

    // recover
    gsap.to('#whiteGold__spec-5',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn5',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-2',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn2',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-3',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn3',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-4',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn4',{duration:1,delay:0.3,opacity:1});
}

function handleWhiteGoldPage_specDetails2() {
    gsap.to('#whiteGold__spec-2',{duration:0.3,opacity:1});
    gsap.fromTo('.whiteGold__spec-2-text',{rotationX:"-90deg"},{duration:1,rotationX:"0deg"});
    gsap.fromTo('#watchPage__whiteGold-specBtn2',{opacity:1},{duration:0.3,delay:0.3,opacity:0});

    // recover
    gsap.to('#whiteGold__spec-5',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn5',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-1',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn1',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-3',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn3',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-4',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn4',{duration:1,delay:0.3,opacity:1});
}

function handleWhiteGoldPage_specDetails3() {
    gsap.to('#whiteGold__spec-3',{duration:0.3,opacity:1});
    gsap.fromTo('.solidLine',{opacity:0,width:'0%'},{duration:1,opacity:1,width:'50%'});
    gsap.fromTo('.whiteGold__spec-3-text',{rotationX:"-90deg"},{duration:1,rotationX:"0deg"});
    gsap.fromTo('#watchPage__whiteGold-specBtn3',{opacity:1},{duration:0.5,delay:0.3,opacity:0});

    // recover
    gsap.to('#whiteGold__spec-1',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn1',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-2',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn2',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-4',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn4',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-5',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn5',{duration:1,delay:0.3,opacity:1});
}

function handleWhiteGoldPage_specDetails4() {
    gsap.to('#whiteGold__spec-4',{duration:0.3,opacity:1});
    gsap.fromTo('.solidLine',{opacity:0,width:'0%'},{duration:1,opacity:1,width:'50%'});
    gsap.fromTo('.whiteGold__spec-4-text',{rotationX:"-90deg"},{duration:1,rotationX:"0deg"});
    gsap.fromTo('#watchPage__whiteGold-specBtn4',{opacity:1},{duration:0.5,delay:0.3,opacity:0});

    // recover
    gsap.to('#whiteGold__spec-1',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn1',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-2',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn2',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-3',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn3',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-5',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn5',{duration:1,delay:0.3,opacity:1});
}

function handleWhiteGoldPage_specDetails5() {
    gsap.to('#whiteGold__spec-5',{duration:0.3,opacity:1});
    gsap.fromTo('.solidLine',{opacity:0,width:'0%'},{duration:1,opacity:1,width:'40%'});
    gsap.fromTo('.whiteGold__spec-5-text',{rotationX:"-90deg"},{duration:1,rotationX:"0deg"});
    gsap.fromTo('#watchPage__whiteGold-specBtn5',{opacity:1},{duration:0.5,delay:0.3,opacity:0});

    // recover
    gsap.to('#whiteGold__spec-1',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn1',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-2',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn2',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-3',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn3',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-4',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn4',{duration:1,delay:0.3,opacity:1});
}

//  Gallery
function handleWhiteGoldPage_gallery(e) {
    if(clickcount_whitegold_spec>=1){
    //no working
    }else{
 if (clickcount_whitegold_gallery <1 && clickcount_whitegold_spec <1 && clickcount_whitegold_video <1) {
    // swapImageToWhitegold();
     gsap.to('#watchPage__whiteGold__gallerytoWhiteGold',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
     // watchPage__whiteGold__gallerytoWhiteGold.classList.remove("selected")
     gsap.to('#watchPage__whiteGold__gallerytoPinkGold',{duration:2,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
     gsap.to('#watchPage__whiteGold__gallery',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
    gsap.to('.watchPage__whiteGold-Container',{duration:0.2,delay:0.3,display:'none',onComplete: showGallery_whiteGold});
  }
  clickcount_whitegold_gallery++;
    e.preventDefault();
    e.stopImmediatePropagation();
    return false
}
}

function showGallery_whiteGold() {
    watchPage__whiteGold_spec.style.display= "none";
    watchPage__whiteGold_gallery.style.display="block";
    whiteGold_galleryClose.style.position="absolute";
    whiteGold_galleryClose.style.display="block";
}

// close gallery
whiteGold_galleryClose.addEventListener("touchstart", function closeGallery(){
    whiteGold_galleryClose.style.display="none";
    whiteGoldGalleryEndHandler();
});

function whiteGoldGalleryEndHandler(e) {
    gsap.to('.watchPage__whiteGold-Container',{duration:2,display:'block',onComplete: completedVideo_whiteGold});
    whiteGold_galleryClose.style.display="none";
    watchPage__whiteGold_gallery.style.display="none";
    watchPage__whiteGold_spec.style.display= "none";
    gsap.to('#watchPage__whiteGold-Scene',{duration:0.5,opacity:1});
    gsap.to('#watchPage__whiteGold__video',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    gsap.to('#watchPage__whiteGold__spec',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    gsap.to('#watchPage__whiteGold__gallery',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
};

// Gallery
// var whiteGoldslideIndex = 1;
// whiteGoldshowSlides(whiteGoldslideIndex);

// function whiteGoldplusSlides(n) {
//   whiteGoldshowSlides(whiteGoldslideIndex += n);
// }

// function whiteGoldCurrentSlide(n) {
//   whiteGoldshowSlides(whiteGoldslideIndex = n);
// }

// function whiteGoldshowSlides(n) {
//   var i;
//   var whiteGoldslides = document.getElementsByClassName("watchPage__whiteGold-gallery-mySlides");
//   var whiteGolddots = document.getElementsByClassName("watchPage__whiteGold-gallery-demo");
//   if (n > whiteGoldslides.length) {whiteGoldslideIndex = 1}
//   if (n < 1) {whiteGoldslideIndex = whiteGoldslides.length}
//   for (i = 0; i < whiteGoldslides.length; i++) {
//       whiteGoldslides[i].style.display = "none";
//   }
//   for (i = 0; i < whiteGolddots.length; i++) {
//       whiteGolddots[i].className = whiteGolddots[i].className.replace(" active", "");
//   }
//   whiteGoldslides[whiteGoldslideIndex-1].style.display = "block";
//   whiteGolddots[whiteGoldslideIndex-1].className += " active";
// }

// Gallery swap image to pink gold
function handleWhiteGoldPage_galleryToPinkGold(e) {
    if (clickcount_whitegold_galleryToPinkGold <1) {
    clickcount_whitegold_galleryToWhiteGold =1;
     gsap.to('#watchPage__whiteGold__gallerytoPinkGold',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
     watchPage__whiteGold__gallerytoWhiteGold.classList.remove("selected")
     gsap.to('#watchPage__whiteGold__gallerytoWhiteGold',{duration:2,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff",onComplete:swapImageToPinkgold});
        
    // gsap.to('.watchPage__whiteGold-Container',{duration:0.2,delay:0.3,display:'none',onComplete: showGallery_whiteGold});
  }
  clickcount_whitegold_galleryToPinkGold++;
    e.preventDefault();
    e.stopImmediatePropagation();
    return false
}

function swapImageToPinkgold() {
    document.getElementById("whiteGoldImageSmall1").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_CU03_PNG.png";
    document.getElementById("whiteGoldImageSmall2").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_CU04_PNG.png";
    document.getElementById("whiteGoldImageSmall3").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_CU05_PNG.png";
    document.getElementById("whiteGoldImageSmall4").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_GP04_PNG.png";
    document.getElementById("whiteGoldImageSmall5").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_backcase_GP11_PNG.png";
    document.getElementById("whiteGoldImageSmall6").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_GP08_PNG.png";
    document.getElementById("whiteGoldImageSmall7").style.display="block";
    document.getElementById("whiteGoldImageSmall8").style.display="block";

    document.getElementById("whiteGoldImage1").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_CU03_PNG.png";
    document.getElementById("whiteGoldImage2").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_CU04_PNG.png";
    document.getElementById("whiteGoldImage3").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_CU05_PNG.png";
    document.getElementById("whiteGoldImage4").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_GP04_PNG.png";
    document.getElementById("whiteGoldImage5").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_backcase_GP11_PNG.png";
    document.getElementById("whiteGoldImage6").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_GP08_PNG.png";
    clickcount_whitegold_galleryToWhiteGold = 0;
}

// Gallery swap image to white gold
function handleWhiteGoldPage_galleryToWhiteGold(e) {
    if (clickcount_whitegold_galleryToWhiteGold <1) {
        clickcount_whitegold_galleryToPinkGold=1;
     gsap.to('#watchPage__whiteGold__gallerytoWhiteGold',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
     // watchPage__whiteGold__gallerytoWhiteGold.classList.remove("selected")
     gsap.to('#watchPage__whiteGold__gallerytoPinkGold',{duration:2,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff",onComplete:swapImageToWhitegold});
        
    // gsap.to('.watchPage__whiteGold-Container',{duration:0.2,delay:0.3,display:'none',onComplete: showGallery_whiteGold});
  }
  clickcount_whitegold_galleryToWhiteGold++;
    e.preventDefault();
    e.stopImmediatePropagation();
    return false
}

function swapImageToWhitegold() {
    document.getElementById("whiteGoldImageSmall1").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_CU04_PNG.png";
    document.getElementById("whiteGoldImageSmall2").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_GP09_PNG.png";
    document.getElementById("whiteGoldImageSmall3").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_GP18_PNG.png";
    document.getElementById("whiteGoldImageSmall4").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_backcase_GP06_PNG.png";
    document.getElementById("whiteGoldImageSmall5").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_CU03_PNG.png";
    document.getElementById("whiteGoldImageSmall6").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_GP08_PNG.png";
    document.getElementById("whiteGoldImageSmall7").style.display="none";
    document.getElementById("whiteGoldImageSmall8").style.display="none";
    whiteGoldCurrentSlide(1);

    document.getElementById("whiteGoldImage1").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_CU04_PNG.png";
    document.getElementById("whiteGoldImage2").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_GP09_PNG.png";
    document.getElementById("whiteGoldImage3").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_GP18_PNG.png";
    document.getElementById("whiteGoldImage4").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_backcase_GP06_PNG.png";
    document.getElementById("whiteGoldImage5").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_CU03_PNG.png";
    document.getElementById("whiteGoldImage6").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_GP08_PNG.png";
    clickcount_whitegold_galleryToPinkGold =0;
}

// Testing Here

 // mainPage_timeline
 //    .to('.mainPage-Container',{duration:1,position:'absolute',top:0})
 //    .fromTo('.mainPage__box-Container',{x:'-100%'},{opacity:1,x:'0%'})
 //    .fromTo('.mainPage__box-Container-right',{x:'100%'},{opacity:1,x:'0%'},'<')
 //    .fromTo('.mainPage__title',{opacity:0,y:70},{opacity:1,y:0})
 //    .fromTo('.mainPage__title-right',{opacity:0,y:70},{opacity:1,y:0},'<')
 //    .fromTo('.solidLine',{opacity:0,width:'0%'},{opacity:1,width:'83%'})
 //    .fromTo('.solidLine-right',{opacity:0,width:'0%'},{opacity:1,width:'83%'},'<')
 //    .fromTo('.solidLine-2',{opacity:0,width:'0%'},{opacity:1,width:'60%'})
 //    .fromTo('.solidLine-2-right',{opacity:0,width:'0%'},{opacity:1,width:'30%'},'<')
 //    .fromTo('.mainPage__action',{opacity:0},{opacity:1},'<')
 //    .fromTo('.mainPage__action-right',{opacity:0},{opacity:1},'<')
 //    .fromTo('.mainPage__image-container',{opacity:0},{opacity:1})
 //    .fromTo('.mainPage__image-container-right',{opacity:0},{opacity:1},'<');

 //  var smoke = document.querySelectorAll('.smoke__text span');
//  for (var i = 0; i <smoke.length; i++) {
//      // smoke[i].style.animation = "smoky 4s 3s both";
// }

 // gsap.fromTo('#watchPage__whiteGold-Scene',{opacity:0},{duration:5,delay:4,opacity:1});
 // gsap.fromTo('.watchPage__whiteGold-Header-title',{opacity:0},{duration:4,delay:2,opacity:1});
 // gsap.fromTo('.watchPage__whiteGold-selected',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,opacity:1,delay:6,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
 // gsap.fromTo('#watchPage__whiteGold__toPinkGold',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,opacity:1,delay:6.5,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
 //    gsap.fromTo('#watchPage__whiteGold__video',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,opacity:1,delay:7,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
 //    gsap.fromTo('#watchPage__whiteGold__spec',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,delay:7.5,opacity:1,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
 //    gsap.fromTo('#watchPage__whiteGold__gallery',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,delay:8,opacity:1,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
    
 
