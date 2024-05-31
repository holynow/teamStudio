'use strict';

// select box
if (document.querySelectorAll('.select-wrap').length > 0) {
    const selectTogglBtn = document.querySelector('.select-wrap .toggle-btn');
    const optionBtns = document.querySelectorAll('.option-btn');
    const handleSelecterEvent = () => {
        const selectOption = document.querySelector('.selectbox-option');
        selectOption.style.display = "none";
        let optionDisplay = selectOption.style.display;
        if (optionDisplay === 'none') {
            selectOption.style.display = "block";
        } else {
            selectOption.style.display = "none";
        };
        optionBtns.forEach((el, index) => {
            el.onclick = () => {
                selectTogglBtn.innerHTML = optionBtns[index].innerHTML;
                selectOption.style.display = "none";
            };
        });
    };
    selectTogglBtn.addEventListener('click', handleSelecterEvent);
};

// accordion
if (document.querySelectorAll('.accordion-wrapper').length > 0) {
    const accordionBtn = document.querySelectorAll('.accord-tit');
    const allTexts = document.querySelectorAll('.accord-cont');
    const accIcon = document.querySelectorAll('.accord-icon');

    // event listener
    accordionBtn.forEach((el) => {
        el.addEventListener('click', toggleAccordion)
    });

    function toggleAccordion(el) {
        const targetText = el.currentTarget.nextElementSibling.classList;
        const targetAccIcon = el
            .currentTarget
            .children[2];
        const target = el.currentTarget;

        if (targetText.contains('show')) {
            targetText.remove('show');
            targetAccIcon
                .classList
                .remove('anime');
            target
                .classList
                .remove('accordionTitleActive');
        } else {
            accordionBtn.forEach((el) => {
                el
                    .classList
                    .remove('accordionTitleActive');

                allTexts.forEach((el) => {
                    el
                        .classList
                        .remove('show');
                });

                accIcon.forEach((el) => {
                    el
                        .classList
                        .remove('anime');
                });

            });

            targetText.add('show');
            target
                .classList
                .add('accordionTitleActive');
            targetAccIcon
                .classList
                .add('anime');
        };
    };
};

// popup
if (document.querySelectorAll('.layer-pop').length > 0) {
    const body = document.querySelector('body');
    const popCloseBtn = document.querySelectorAll('.close-btn, .cancle-btn');
    const popCancleBtn = document.querySelectorAll('.cancle-btn');
    const layerPop = document.querySelectorAll('.layer-pop');
    const popOpenBtn = document.querySelectorAll('.pop-open');

    // popup open
    popOpenBtn.forEach((el) => {
        el.addEventListener('click', popOpen);
    });

    // popup close
    popCloseBtn.forEach((el) => {
        el.addEventListener('click', popupClose);
    });

    // popup cancle
    popCancleBtn.forEach((el) => {
        el.addEventListener('click', popCancle);
    });

    function popOpen(el) {
        body.style.overflow = "hidden";
        const openData = el.target.dataset.open;
        layerPop.forEach((el, i) => {
            if (layerPop[i].id === openData) {
                el
                    .classList
                    .add('open');
            };
        });
    };
    function popupClose(el) {
        const targetPopup = el.currentTarget.parentNode.parentNode;
        const targetHasClass = targetPopup.classList;
        if (targetHasClass.contains('open')) {
            targetHasClass.remove('open');
            body.style.overflow = "auto";
        };
    };
    function popCancle(el) {
        const targetPopup = el.currentTarget.parentNode.parentNode.parentNode;
        const targetHasClass = targetPopup.classList;
        const allPopup = document.querySelectorAll('.layer-pop');
        let openLength = [];
        for (let i = 0; i < allPopup.length; i++) {
            if (allPopup[i].classList.contains('open')) {
                openLength.push(i);
            };
        };
        if (openLength.length < 1) {
            body.style.overflow = "hidden";
        }
        if (targetHasClass.contains('open')) {
            targetHasClass.remove('open');
        };
    };
};
// resize
function resizeEvent() {
    let winW = window.innerWidth;
    const layerPop = document.querySelectorAll('.layer-pop:not(.sm)');
    const tableWrap = document.querySelectorAll('.table-list-wrap');
    layerPop.forEach((el, i) => {
        if (winW <= 374) {
            layerPop[i]
                .classList
                .add('full')

        } else {
            layerPop[i]
                .classList
                .remove('full')
        }
    });
    tableWrap.forEach((el, i) => {
        if (winW <= 750) {
            tableWrap[i]
                .classList
                .add('table-slide')
        } else {
            tableWrap[i]
                .classList
                .remove('table-slide')
        }
    });
}
resizeEvent();
window.addEventListener('resize', resizeEvent);

// 주소찾기
function execDaumPostcode() {
    new daum
        .Postcode({
            oncomplete: function (data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분. 각 주소의 노출 규칙에 따라 주소를 조합한다. 내려오는 변수가 값이 없는
                // 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document
                    .getElementById("address")
                    .value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document
                    .getElementById("detailAddress")
                    .focus();
            }
        })
        .open();
}
if (document.querySelectorAll('.slide_wrap').length > 0) { 
    
    // swipe 슬라이크 전체 크기(width 구하기)
    const slide = document.querySelector(".slide");
    let slideWidth = slide.clientWidth;
    
    // 버튼 엘리먼트 선택하기
    const prevBtn = document.querySelector(".slide_prev_button");
    const nextBtn = document.querySelector(".slide_next_button");
    
    // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
    const slideItems = document.querySelectorAll(".slide_item");
    // 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
    const maxSlide = slideItems.length;
    
    // 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
    let currSlide = 1;
    
    // 페이지네이션 생성
    const pagination = document.querySelector(".slide_pagination");
    
    for (let i = 0; i < maxSlide; i++) {
        if (i === 0) 
            pagination.innerHTML += `<li class="active">•</li>`;
        else 
            pagination.innerHTML += `<li>•</li>`;
        }
    
    const paginationItems = document.querySelectorAll(".slide_pagination > li");
    
    function nextMove() {
        currSlide++;
        // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
        if (currSlide <= maxSlide) {
            // 슬라이드를 이동시키기 위한 offset 계산
            const offset = slideWidth * (currSlide - 1);
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems.forEach((i) => {
                i.setAttribute("style", `left: ${ - offset}px`);
            });
            // 슬라이드 이동 시 현재 활성화된 pagination 변경
            paginationItems.forEach((i) => i.classList.remove("active"));
            paginationItems[currSlide - 1]
                .classList
                .add("active");
        } else {
            currSlide--;
        }
    }
    function prevMove() {
        currSlide--;
        // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
        if (currSlide > 0) {
            // 슬라이드를 이동시키기 위한 offset 계산
            const offset = slideWidth * (currSlide - 1);
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems.forEach((i) => {
                i.setAttribute("style", `left: ${ - offset}px`);
            });
            // 슬라이드 이동 시 현재 활성화된 pagination 변경
            paginationItems.forEach((i) => i.classList.remove("active"));
            paginationItems[currSlide - 1]
                .classList
                .add("active");
        } else {
            currSlide++;
        }
    }
    
    // 버튼 엘리먼트에 클릭 이벤트 추가하기
    nextBtn.addEventListener("click", () => {
        // 이후 버튼 누를 경우 현재 슬라이드를 변경
        nextMove();
    });
    // 버튼 엘리먼트에 클릭 이벤트 추가하기
    prevBtn.addEventListener("click", () => {
        // 이전 버튼 누를 경우 현재 슬라이드를 변경
        prevMove();
    });
    
    // 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
    window.addEventListener("resize", () => {
        slideWidth = slide.clientWidth;
    });
    
    // 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
    for (let i = 0; i < maxSlide; i++) {
        // 각 페이지네이션마다 클릭 이벤트 추가하기
        paginationItems[i].addEventListener("click", () => {
            // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
            currSlide = i + 1;
            // 슬라이드를 이동시키기 위한 offset 계산
            const offset = slideWidth * (currSlide - 1);
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems.forEach((i) => {
                i.setAttribute("style", `left: ${ - offset}px`);
            });
            // 슬라이드 이동 시 현재 활성화된 pagination 변경
            paginationItems.forEach((i) => i.classList.remove("active"));
            paginationItems[currSlide - 1]
                .classList
                .add("active");
        });
    }
    
    // 드래그(스와이프) 이벤트를 위한 변수 초기화
    let startPoint = 0;
    let endPoint = 0;
    
    // PC 클릭 이벤트 (드래그)
    slide.addEventListener("mousedown", (e) => {
        startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
    });
    
    slide.addEventListener("mouseup", (e) => {
        endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
        if (startPoint < endPoint) {
            // 마우스가 오른쪽으로 드래그 된 경우
            prevMove();
        } else if (startPoint > endPoint) {
            // 마우스가 왼쪽으로 드래그 된 경우
            nextMove();
        }
    });
    
    // 모바일 터치 이벤트 (스와이프)
    slide.addEventListener("touchstart", (e) => {
        console.log("touchstart", e.touches[0].pageX);
        startPoint = e
            .touches[0]
            .pageX; // 터치가 시작되는 위치 저장
    });
    slide.addEventListener("touchend", (e) => {
        console.log("touchend", e.changedTouches[0].pageX);
        endPoint = e
            .changedTouches[0]
            .pageX; // 터치가 끝나는 위치 저장
        if (startPoint < endPoint) {
            // 오른쪽으로 스와이프 된 경우
            console.log("prev move");
            prevMove();
        } else if (startPoint > endPoint) {
            // 왼쪽으로 스와이프 된 경우
            console.log("next move");
            nextMove();
        }
    });
}
window.addEventListener('scroll', (e) => {
    scrollHandler();
});
const scrollHandler = () => {
if (document.querySelectorAll('.main-wrap').length > 0) {
        const target = document.querySelector('.main-wrap');
        let scrollY = window.scrollY;
        if (scrollY >= 2000) {
            target.style.background = "#111";
        } else {
            target.style.background = "";
        }
    };
}

// gnb btn
if (document.querySelectorAll('.global-nav').length > 0) {
    const gnb = document.querySelector('.global-nav');
    const openBtn = document.querySelector('.nav-open-btn')
    const closeBtn = document.querySelector('.global-nav .nav-close-btn')
    const gnbOpen = () => {
        let gnbHasClass = gnb.classList.contains('on');
        if (!gnbHasClass) {
            gnb.classList.add('on');
        }
    };
    const gnbClose = () => {
        let gnbHasClass = gnb.classList.contains('on');
        if (gnbHasClass) {
            gnb.classList.remove('on');
        }
    };
    openBtn.addEventListener('click', gnbOpen);
    closeBtn.addEventListener('click', gnbClose);
}

