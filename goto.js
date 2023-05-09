//화살표마다 rotation변수 선언, 상황에 맞게 값 저장
//각 화살표의 rotation = 위에서 만든 rotation 변수 적용
//각 화살표의 id를 이용해 attribute 가능한지 확인하기


//아래 코드는 entity의 id를 이용해 entity를 파악하고(entitymanger이용), entity 뒤에 '.'을 붙여 entity.component.property 값 까지 얻을 수 있음--> 코드 결과 : html에 scene에 설정된 maxtrack값 가져옴
const sceneId = 'scene';
const entity = entityManager.getEntityById(sceneId);
var imgmax = entity.components.mindar-image.maxTrack; // html에서 설정한 maxtrack값을 가져옴

// 화살표 이미지의 id 저장
var arwid = [];//화살표 이미지의 id
const arw = 'arrow';
for(let i = 0; i < imgmax; i++){
  arwid.push(arw + i);
}


// 사용자의 열 값에 따른 화살표 방향 설정


var entity = document.querySelector('a-entity.');
entity.setAttribute('position', '1 2 3');






