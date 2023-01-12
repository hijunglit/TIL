<h1>사이드메뉴 구현</h1>
<h3>햄버거 메뉴와 사이드에서 네비게이션 메뉴가 나오는 사이드메뉴를 구현한다</h3>

<p>html 소스</p>

<button class="sidebarToggle"><i class="fas fa-bars"></i></button>
    <aside class="sidebar">
        <div class="sidebarHeader">
            <img src="https://vanilla-js-basic-project-4-navbar.netlify.app/logo.svg" alt="logo" class="logo">
            <button class="close"><i class="fas fa-times"></i></button>
        </div>
        <nav class="menuList">
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">projects</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </nav>
    
        <ul class="socialLink">
            <li><a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a></li>
            <li><a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://behance.com" target="_blank"><i class="fab fa-behance"></i></a></li>
            <li><a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://www.sketch.com" target="_blank"><i class="fab fa-sketch"></i></a></li>
        </ul>
    </aside>

<p>1.버튼태그로 햄버거 메뉴, aside 태그안에 사이드메뉴 헤더, 메뉴 리스트,  sns링크 순으로 구조를 만든다.</p>
<p>css 소스</p>

aside.sidebar {
    display: grid; grid-template-rows: 1fr 8fr 1fr;
    position: fixed;
    top: 0;left: 0;
    width: 100%; height: 100%;
    background: var(--white-color);
    transition: all 0.3s ease-in;
    transform: translate(-100%);
}

.sidebar.show {
    transform: translateX(0%);
}

2.display grid  속성을 부여하고 메뉴가 나올때와 닫힐 때를 transform 속성의 translate 으로 조작한다.

<p>js 소스</p>
const closeMenu = document.querySelector(".close");
const sideBar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebarToggle");

function visibleMenu() {
    sideBar.classList.toggle("show");
}
function hideMenu() {
    sideBar.classList.remove("show");
}
toggleBtn.addEventListener("click", visibleMenu);
closeMenu.addEventListener("click", hideMenu);

3. classList.toggle(), classList.remove() 함수로 show 클래스를 부여하고 제거하며 사이드 메뉴를 제어한다.
