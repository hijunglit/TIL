<h1>랜덤 리뷰와 리뷰 캐러셀 구현</h1>
<h3>주요 기능</h3>
<ul>
    <li>object</li>
    <li>DOMContentloaded</li>
    <li>addEventListener</li>
    <li>array.length</li>
    <li>textContent</li>
</ul>

1.object : 우선 사용자 정보와 리뷰가 담긴 오브젝트 배열을 만든다.

2.DOMContentloaded : 초기html 문서를 완전히 불러오고 분석했을 때 발생한다. 

    기본 용도 예시) 
    window.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM fully loaded and parsed');
    }); 

    DOMContentLoaded가 발생하면 두변 째 인자로 오브젝트의 첫 번째 배열을 리뷰 컨테이너에 뿌려준다. 

    document.addEventListener("DOMContentLoaded", renderReview);

    function renderReview() {
        let i = 0;
        img.src = `${users[i].profileImg}`;
        img.classList.add("user_img");
        userName.textContent = `${users[i].name}`;
        position.textContent = `${users[i].position}`;
        aboutReview.textContent = `${users[i].reviewContent}`;
    }

3. 리뷰 캐러셀을 조작하는 버튼 각각에 forEach(); 함수로 클릭이벤트를 걸고, 
    클릭한 버튼이 이 전 버튼인지, 다음 버튼인지 클래스 명으로 감지하기 위해 node.classList.contains(); 
    함수를 사용한다

4.  캐러셀이 사용자리뷰의 끝에 도달할 때 다음을 클릭하면 처음 리뷰로, 
    첫 리뷰에 있을 때 이전 을 클릭하면 끝으로 가야 하기 때문에 array.length 를 사용해 
    리뷰의 몇 번 째에 있는지 감지한다.

5. node.textContent 속성을 이용해 각각의 태그에 데이터를 뿌려준다. 
