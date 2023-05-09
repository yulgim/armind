//화살표마다 rotation변수 선언, 상황에 맞게 값 저장
//각 화살표의 rotation = 위에서 만든 rotation 변수 적용
//각 화살표의 id를 이용해 attribute 가능한지 확인하기
var imgmax = 5;
var arwid = [];//화살표 이미지의 id
const arw = 'arrow';
for(int i = 0; i < imgmax; i++){
  arwid.push(arw + string(i));
}


var entity = document.querySelector('a-entity.');
entity.setAttribute('position', '1 2 3');
