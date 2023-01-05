<h1>color flipper</h1>
버튼을 누를 때 마다 배경 색을 바꿔주는 프로그램
color 코드를 담고있는 배열을 만들어주고
버튼에 클릭이벤트, 색상을 랜덤으로 바꾸는 함수를 만들어준다.

clickMe.addEventListener("click", randomColor);

랜덤으로 배열의 n번째 값을 부르기 위해 Math.random()함수를 사용하고, 결과값을 정수로 바꾸기 위해 Math.floor()함수를 사용한다.

정수는 배열의 length를 넘지 않아야 한다. 

background.style.backgroundColor = `${colorArray[Math.floor(Math.random() * (colorArray.length-1))]}`;
