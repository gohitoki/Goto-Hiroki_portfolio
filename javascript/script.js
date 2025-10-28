/*--ローディングアニメーション---*/
const loadingAreaBlack=document.querySelector('.loading');
const loadingAreaWhite=document.querySelector('.loading_screen');
const loadingText=document.querySelector('.loading p');
window.addEventListener('load',()=>{
	loadingAreaBlack.animate(
		{
			opacity:[1,0],
			visibility:'hidden',
		},
		{
			duration:2000,
			delay:1200,
			easing:'ease',
			fill:'forwards',
		}
	);
	
	loadingAreaWhite.animate(
		{
			translate:['0 100vh','0 0','0 -100vh']
		},
		{
			duration:2000,
			delay:800,
			easing:'ease',
			fill:'forwards',
			
		}
	);
	loadingText.animate(
		[
			{
				opacity:1,
				offset:.8
			},
			{
				opacity:0,
				offset:1
			},
		],
		{
			duration:1200,
			easing:'ease',
			fill:'forwards',
		}
	);
});
/*-----------------------------*/


/*----ヘッダー隠し---------*/
const header=document.querySelector('header');
let prevY=window.scrollY;

window.addEventListener('scroll',()=>{
	const currentY=window.scrollY;
	if (currentY<prevY){
		header.classList.remove('hidden');
	}else{
	if (currentY>0){
		header.classList.add('hidden');
		}
	}
	prevY=currentY;
});
/*-----------------------------*/



/*----カーソル装飾---------*/
var cursor = document.getElementById('cursor'); 

// カーソル用のdivタグをマウスに追従させる
document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

var link = document.querySelectorAll('a');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('cursor--hover');
    });
    link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('cursor--hover');   
    });
}

/*-----------------------------*/


/*----スクロールフェードイン(toppage)---------*/
window.addEventListener('scroll', function(){

  //すべての.itemを取得
  const works_flex = document.querySelectorAll('.works_flex');
	const top_profile_title=document.querySelectorAll('.profile');
	const skill=document.querySelectorAll('.skill');

	const site_summary=document.querySelectorAll('.site_summary_wrap');
	const site_about=document.querySelectorAll('.site_about_wrap');
	const design_flex=document.querySelectorAll('.design_flex');

  //querySelectorAll('.item')は配列になるので、for構文で取得
  //配列は0から始まるのでi = 0
  //i < item.lengthで配列の要素よりも数が小さい時　i++(インクリメント)1つずつ増加
  for(let i = 0; i < works_flex.length; i++){

    //.itemのオフセットの高さを取得
    var targetTop = works_flex[i].offsetTop;

    //画面のスクロール量 + 300px > .itemのオフセットの高さを取得
    if(window.scrollY +window.innerHeight-500 > targetTop){
    
      //書くitemにクラスshowを追加
      works_flex[i].classList.add('active');
    }
  }

	for(let i = 0; i < top_profile_title.length; i++){

    //.itemのオフセットの高さを取得
    var targetTop = top_profile_title[i].offsetTop;

    //画面のスクロール量 + 300px > .itemのオフセットの高さを取得
    if(window.scrollY +window.innerHeight-500 > targetTop){
    
      //書くitemにクラスshowを追加
      top_profile_title[i].classList.add('active');
    }
  }

	for(let i = 0; i < skill.length; i++){

    //.itemのオフセットの高さを取得
    var targetTop = skill[i].offsetTop;

    //画面のスクロール量 + 300px > .itemのオフセットの高さを取得
    if(window.scrollY +window.innerHeight-500 > targetTop){
    
      //書くitemにクラスshowを追加
      skill[i].classList.add('active');
    }
  }
});

/*-----------------------------*/