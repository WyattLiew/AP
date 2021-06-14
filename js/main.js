var mainPage_whiteGold_btn = document.getElementById("mainPage-whiteGold-button");

var homePage_scene = document.getElementById("homePage_scene");
var storyBanner = document.querySelector(".story_banner");
var mainPageContainer = document.querySelector(".mainPage-Container");
var watchPage__whiteGold_spec = document.getElementById("watchPage__whiteGold-spec");
var watchPage__whiteGold_gallery = document.getElementById("watchPage__whiteGold-gallery");

const mainPage_timeline = gsap.timeline({paused:true,defaults:{duration:1}})
    .to('.mainPage-Container',{duration:1.5,delay:0.5,position:'absolute',top:0})
    .fromTo('.mainPage__box-Container',{x:'-100%'},{opacity:1,x:'0%'})
    .fromTo('.mainPage__box-Container-right',{x:'100%'},{opacity:1,x:'0%'},'<')
    
    .fromTo('.mainPage__image-container',{opacity:0},{opacity:1})
    .fromTo('.mainPage__image-container-right',{opacity:0},{opacity:1},'<')
    .fromTo('.mainPage__title',{opacity:0,y:70},{opacity:1,y:0})
    .fromTo('.mainPage__title-right',{opacity:0,y:70},{opacity:1,y:0},'<')
    .fromTo('.mainPage__action',{opacity:0},{opacity:1},)
    .fromTo('.mainPage__action-right',{opacity:0},{opacity:1},'<');

mainPage_timeline.eventCallback("onReverseComplete", completeReverseWhiteGoldHandler);

mainPage_whiteGold_btn.addEventListener("touchstart", handleWhiteGoldPage, false);


// window.addEventListener('load', function(){
//     var ts_hp = document.getElementById('touchSurface_homePage');
//     var ts_hp_inner = document.getElementById('touchSurface_homePage_inner');
//      var story = document.getElementById("story");
//     var hidetimer = null
//     swipedetect(ts_hp, function(swipedir){
//         if (swipedir != 'none'){
//             console.log(swipedir);
//             gsap.to('#homePage_scene',{duration:4,opacity:0});
            
//              story.style.display="block";
//              story.play();
//              story.addEventListener('ended',storyEndHandler,false);
//         }
//     })
// }, false);

var ts_hp = document.getElementById('touchSurface_homePage');
    var ts_hp_inner = document.getElementById('touchSurface_homePage_inner');
     var story = document.getElementById("story");
    var hidetimer = null
    swipedetect(ts_hp, function(swipedir){
        if (swipedir != 'none'){
            console.log(swipedir);
            // window.CI360.init();
            gsap.to('#homePage_scene',{duration:2,opacity:0});
            
            storyBanner.style.display="flex";
             story.style.display="block";
             story.play();
             story.addEventListener('ended',storyEndHandler,false);
        }
    })

function swipedetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}

function storyEndHandler(e) {
    gsap.to('#story',{duration:0.6,delay:0.5,display:"none",onComplete:function(){mainPageContainer.style.display="block",mainPage_timeline.restart()}});
    // gsap.to('.mainPage-Container',{duration:1.5,delay:1.7,position:'absolute',top:0,onComplete: function() {mainPage_timeline.restart()}})
    // gsap.to('#story',{duration:1,delay:0.5,display:"none"});
    // mainPageContainer.style.display="block";
    // mainPage_timeline.play();
    }

function handleWhiteGoldPage(e) {
    if(mainPage_timeline.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    mainPage_timeline.timeScale(2)
    mainPage_timeline.reverse();
}

function completeReverseWhiteGoldHandler() {
    // Clear block
    homePage_scene.style.display="none";
    storyBanner.style.display="none";
    mainPageContainer.style.display="none";
    gsap.to('.watchPage__whiteGold-Container',{duration:1,position:'absolute',top:0,display:'block'})
    smokeText.style.display="block";
 for (var i = 0; i <smokeTextSpan.length; i++) {
     smokeTextSpan[i].style.animation = "smoky 2s both";
     smokeTextSpan[i].style.animationDelay= `${1 + i/10}s`; 
}
    gsap.fromTo('.watchPage__whiteGold-Header-title',{opacity:0},{duration:2,delay:1,opacity:1,onComplete:function() {
        if(whiteGold_360Image!==1){
             window.CI360.init();
        }
    }});
    gsap.fromTo('#watchPage__whiteGold-Scene',{opacity:0},{duration:3,delay:2,opacity:1});
    gsap.fromTo('.watchPage__whiteGold-selected',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,opacity:1,delay:2,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
    gsap.fromTo('#watchPage__whiteGold__toPinkGold',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,opacity:1,delay:2.3,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
    gsap.fromTo('#watchPage__whiteGold__video',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,opacity:1,delay:2.6,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
    gsap.fromTo('#watchPage__whiteGold__spec',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,delay:3,opacity:1,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
    gsap.fromTo('#watchPage__whiteGold__gallery',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,delay:3.3,opacity:1,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white",onComplete: function(){smokeText.style.display="none";}});
    
}


