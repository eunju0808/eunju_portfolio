// fullpage
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    // 위아래 스크롤
	scrollHorizontally: true,
    // 네비게이터를 보이고 숨김
    navigation: true,
    // 네비게이터 위치
    navigationPosition: 'right',
    // 하이퍼링크
    anchors:['home','aboutMe','portfolio','','contact'],

	afterLoad: function(origin, destination, direction){
        // destination 매개변수는 해당 섹션에 들어왔을때
        // origin 매개변수는 해당 섹션에서 나갔을 때
        var origin = this;
        console.log(origin)
        // console.log(`원래섹션: ${origin},${destination},${direction}`)

        // using index
        if(destination.index == 0 ){
            sec1_out();
        }if(destination.index == 1 ){
            sec1_in();
        }if(destination.index == 2 ){
			sec1_out();
		}if(destination.index == 3 ){
			
		}if(destination.index == 4 ){
			
		}if(origin.index == 1){
            
		}
    }
});

// header 메뉴
let btnMenu=document.querySelector(".btn_menu")
let nav=document.querySelector("nav")

let sw=true
btnMenu.addEventListener("click",function(){
	if(sw==true){
		btnMenu.classList.add("on")
		nav.classList.add("on")
		sw=false
	}else{
		btnMenu.classList.remove("on")
		nav.classList.remove("on")
		sw=true
	}
})

$(function(){
	// tap 메뉴 (web)
	$("#section2 .tap_menu ul li").on('click',function(){
		let num=$(this).index();
        console.log(num);
		$("#section2 .tap_menu ul li a").removeClass('on');
		$(this).children().addClass('on');
		
		$(".web .swiper").hide();
        $(".web .swiper").eq(num).show();
	});

	// tap 메뉴 (web)
	$("#section3 .tap_menu ul li").on('click',function(){
		let num=$(this).index();
        console.log(num);
		$("#section3 .tap_menu ul li a").removeClass('on');
		$(this).children().addClass('on');

		$(".gallery .container_wrap").hide();
        $(".gallery .container_wrap").eq(num).show();
	})

	// 그래픽 상세페이지 닫기
	$(".btn_close").on('click',function(){
		$(".detail_wrap").hide();
		$('body').off('scroll touchmove mousewheel');
	})
	// 그래픽 상세페이지 열기
	$(".container_graphic .item").on('click',function(){
		let num=$(this).index();
		console.log(num);
		$(".detail_graphic .detail_wrap").hide();
		$(".detail_graphic .detail_wrap").eq(num).show();
		$('body').on('scroll touchmove mousewheel', function(e) {
			e.preventDefault();
			e.stopPropagation();
			return false;
		});
	})

	// uiux 상세페이지 닫기
	$(".btn_close").on('click',function(){
		$(".detail_wrap").hide();
		$('body').off('scroll touchmove mousewheel');
	})
	// uiux 상세페이지 열기
	$(".container_uiux .item").on('click',function(){
		let num=$(this).index();
		console.log(num);
		$(".detail_uiux .detail_wrap").hide();
		$(".detail_uiux .detail_wrap").eq(num).show();
		$('body').on('scroll touchmove mousewheel', function(e) {
			e.preventDefault();
			e.stopPropagation();
			return false;
		});
	})
});

// swiper 슬라이드
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	// autoplay: {
	// 	delay: 3000, // important !!
	// 	disableOnInteraction: false,
	// },
	speed: 300,
	loop: true,
	ovbserver: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable:true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// skill gage 애니메이션
function sec1_in(){
    let tl = anime.timeline({
        easing: 'linear',
        duration: 500
    });
    tl.add({
        targets: '.gage1',
        width: '90%',
		delay: 1000
    })
    .add({
        targets: '.gage2',
        width: '90%',
    })
    .add({
        targets: '.gage3',
        width: '60%',
    })
    .add({
        targets: '.gage4',
        width: '75%',
    })
    .add({
        targets: '.gage5',
        width: '65%',
    })
}
// profile을 벗어나면 gage 0
function sec1_out(){
    anime({
        targets:'.gagein',
        width:0,
    })
}
