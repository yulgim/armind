//화살표마다 rotation변수 선언, 상황에 맞게 값 저장
//각 화살표의 rotation = 위에서 만든 rotation 변수 적용
//각 화살표의 id를 이용해 attribute 가능한지 확인하기

// 사용자가 입력한 열 값을 저장하는 함수
function saveNumber()  {
  var num = document.getElementById('input_num').value; // id='input_num'인 입력창에 입력된 열 값을 불러와 저장, 열은 1열부터 시작
  var user_num = Number(num);
  user_num -= 1; // 화살표 이미지의 id는 0부터 시작하기에 1을 빼준다.
}


//아래 코드는 entity의 id를 이용해 entity를 파악하고(getElementById이용), entity 뒤에 '.'을 붙여 entity.component.property 값 까지 얻을 수 있음--> 코드 결과 : html에 scene에 설정된 maxtrack값 가져옴
const sceneId = '#scene';
const entity = document.querySelector(sceneId);
var imgmax = entity.getAttribute('mindar-image','maxTrack'); // html에서 설정한 maxtrack값을 가져옴

// 화살표 이미지의 id 저장
var arwid = [];//ar 오브젝트의 id
const arw = '#arrow';
for(let i = 0; i < imgmax; i++){
  arwid.push(arw + i);
}


// 사용자의 열 값에 따른 화살표 방향 설정, '설정한 규칙 : 좌석이 뒤로 갈수록 열의 수가 증가함'

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







