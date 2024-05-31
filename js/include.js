'use strict';
const include = {
    meta: function () {
        document.write('<meta charset="UTF-8">');
        document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
        document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"></meta>');
    },
    styles: function () {
        document.write('<link rel="stylesheet" href="/css/reset.css">');
        document.write('<link rel="stylesheet" href="/css/fonts.css">');
        document.write('<link rel="stylesheet" href="/css/global.css">');
        document.write('<link rel="stylesheet" href="/css/ui.css">');
    },
    scripts: function () {
        document.write('<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>')
        document.write('<script src="/js/ui.js" defer></script>');
    },
    skipNav: function () {
        document.write('<div class="skip-navi"><a href="#gnb">주요 메뉴 바로가기</a><a href="#contents">본문 컨텐츠 바로가기</a></div>');
    },
    header: function () {
        document.write('<header id="header">');
        document.write('<div class="inner-wrap">');
        document.write('<a href="#none" class="logo">');
        document.write('<img src="/img/logo.svg" alt="">');
        document.write('</a>');
        document.write('<button class="nav-open-btn"><span class="a11y">메뉴버튼</span></button>');
        document.write('<nav class="global-nav">');
        document.write('<ul>');
        document.write('<li><a href="/index.html">TEAM STUDIOS</a></li>');
        document.write('<li><a href="/html/download/download.html">DOWNLOAD</a></li>');
        document.write('<li><a href="/html/template/template.html">TEMPLATE</a></li>');
        document.write('<li><a href="/html/mypage/mypage.html">MY PAGE</a></li>');
        document.write('</ul>');
        document.write('<button type="button" class="nav-close-btn"></button>');
        document.write('</nav>');
        document.write('</div>');
        document.write('</header>');
    }, 
    footer: function () {
        document.write('<footer id="footer">');
        document.write('<div class="footer-inner inner-wrap">');
        document.write('<div class="comp-info">');
        document.write('<h4>TEAM STUDIOS</h4>');
        document.write('<address>경기도 성남시 판교 제2 테크노밸리 내 위치</address>');
        document.write('</div>');
        document.write('<div class="comp-info">');
        document.write('<h4>DOORIBUN</h4>');
        document.write('<dl>');
        document.write('<dt>대표</dt>');
        document.write('<dd>서국한</dd>');
        document.write('</dl>');
        document.write('<dl>');
        document.write('<dt>주소</dt>');
        document.write('<dd>서울시 마포구 토정로 194, 2층</dd>');
        document.write('</dl>');
        document.write('<dl>');
        document.write('<dt>전화</dt>');
        document.write('<dd>+82)02-6395-3926</dd>');
        document.write('</dl>');
        document.write('<dl>');
        document.write('<dt>팩스</dt>');
        document.write('<dd>+82)02-6395-3927</dd>');
        document.write('</dl>');
        document.write('<dl>');
        document.write('<dt>메일</dt>');
        document.write('<dd>ituberstudio@dooribun.com</dd>');
        document.write('</dl>');
        document.write('<dl>');
        document.write('<dt>사업자번호</dt>');
        document.write('<dd>468-81-00729</dd>');
        document.write('</dl>');
        document.write('</div>');
        document.write('</div>');
        document.write('<article class="footer-bottom inner-wrap">');
        document.write('<ul class="links">');
        document.write('<li><a href="#none">개인정보 처리 방침</a></li>');
        document.write('<li><a href="#none">이용약관</a></li>');
        document.write('</ul>');
        document.write('<p class="copyright">© 2022 DOORIBUN All Rights Reserved</p>');
        document.write('</article>');
        document.write('</footer>');
    }
}