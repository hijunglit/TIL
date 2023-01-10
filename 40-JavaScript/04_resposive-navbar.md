    <h1>반응형 네이게이션 구현</h1>
    <p>웹사이트에서 아주 많이 사용 되는 기능이다.</p>
    <h3>주요 사용 함수</h3>
    <ul>
        <li>document.querySelector()</li>
        <li>addEventListener()</li>
        <li>classList.toggle()</li>
    </ul>

    <ul>
        <li>1.querySelector() 함수로 변수를 만든다.</li>
        <li>const togglebtn = document.querySelector(".toggleMenu");
            const nav = document.querySelector(".nav");
            const navClasses = "closeMenu";
        </li>
        <li>2.addEventListner() 를 이용해 햄버거 버튼에 이벤트를 감지한다.</li>
        <li>togglebtn.addEventListener("click", openMenu);</li>
        <li>classList.toggle() 함수로 햄버거버튼을 클릭할 때 마다 사이드 메뉴의 클래스를 추가하고 제거한다. <br>
            사이드 메뉴의 css 속성값을 조작해 숨기고 나타내기 위한 함수이다.
        </li>
        <li>    function openMenu() {
                nav.classList.toggle(navClasses);
            }
        </li>
    </ul>
