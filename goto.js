

window.addEventListener('DOMContentLoaded', function(){
  const sceneEl = document.querySelector("a-scene"); //entity의 class를 이용해 entity를 파악하고(querySelector이용)
  const arSystem = sceneEl.systems["mindar-image-system"]; //출처 : https://hiukim.github.io/mind-ar-js-doc/examples/events-handling
  const start = document.querySelector("#ar_start_btn");
  
  const imgmax = 5;
	
  let arwid = [];//ar 오브젝트의 id
  const arw = '#arrow';
  for(let i = 0; i < imgmax; i++){
    arwid.push(arw + i);
  }
  console.log(arwid);
  
  const num = document.querySelector('#input_num');
  const check = document.querySelector('#input_btn');
  let user_num=0;
  
  

  check.addEventListener('click', function() {
    user_num = Number(num.value);
    console.log(typeof user_num);
    console.log(user_num);
        
    var arwimg = [];// 사용자의 열 값에 따른 화살표 방향 설정, '설정한 규칙 : 좌석이 뒤로 갈수록 열의 수가 증가함'
    for (let i = 1; i < user_num; i++){
      arwimg.push('#up'); // 사용자 열보다 앞에 있는 이미지 타겟에는 위를 향하는 화살표 표시
    }
    arwimg.push('#arrive'); // 사용자 열에 있는 이미지 타겟에는 도착 아이콘 표시
    for (let i = user_num+1; i <= imgmax; i++){
      arwimg.push('#down'); //사용자 열보다 뒤에 있는 이미지 타겟에는 아래를 향하는 화살표 표시
    }
    console.log(arwimg);
    
	  
    var imageEntity = document.getElementById(arwid[0]);
    console.log(imageEntity.getAttribute('src'));
    imageEntity.setAttribute('src', '#arrive');
    console.log(imageEntity.getAttribute('src'));
    for (let i = 0; i < imgmax; i++){
	    let imageEntity = document.querySelector(arwid[i]);
	    imageEntity.setAttribute("src", arwimg[i]);
    }
    console.log('imgsrc');
	  
  });
  
  
  
  start.addEventListener('click', function() {
    if(check.style.display !== 'none' && num.style.display !== 'none') { // 입력창과 '확인' 버튼 보일 때, 'on' 버튼 누르면 입력창과  '확인' 버튼 사라며 ar 시작
					  check.style.display = 'none';
					  num.style.display = 'none'; 
					  start.innerText = 'now_strat';
            arSystem.start(); // ar 시작
					  console.log('start');
				  } else if(check.style.display == 'none' && num.style.display == 'none') {
					  check.style.display = 'block';
					  num.style.display = 'block';
					  start.innerText = 'now_stop';
            arSystem.stop(); // ar 시작
					  console.log('stop');
				  }
  });
  
});



/*

//아래 코드는 entity의 id를 이용해 entity를 파악하고(querySelector이용), getAttribute('component이름', 'property 이름')을 이용--> 코드 결과 : html에 scene에 설정된 maxtrack값 가져옴

// 화살표 이미지의 id 저장
var arwid = [];//ar 오브젝트의 id
const arw = '#arrow';
for(let i = 1; i <= imgmax; i++){
  arwid.push(arw + i);
}


// 

var arwimg = [];//화살표 이미지 경로
for (let i = 0; i < user_num; i++){
 arwimg.push('./content/up.png'); // 사용자 열보다 앞에 있는 이미지 타겟에는 위를 향하는 화살표 표시
}
arwimg.push('./content/arrive.png'); // 사용자 열에 있는 이미지 타겟에는 도착 아이콘 표시
for (let i = user_num+1; i < imgmax; i++){
 arwimg.push('./content/down.png'); //사용자 열보다 뒤에 있는 이미지 타겟에는 아래를 향하는 화살표 표시
}
  


// 각 이미지 타겟 위에 나타날 화살표 이미지 결정
for (let i = 0; i < imgmax; i++){
  var imageEntity = document.querySelector(arwid[i]);
  imageEntity.setAttribute('src', arwimg[i]);
}


*/






