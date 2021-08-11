const selected = document.querySelector(".filter-selected");
const optionContainer = document.querySelector('.filter-options-container');

const optionList = document.querySelectorAll(".filter-option");

//카테고리별 세부 선택 틀 클릭시 active-> 하단에 카테고리별 선택항목 뜸
selected.addEventListener("click",()=>{
    optionContainer.classList.toggle("active");
});

//filter-option 세부항목 선택시 -> filter-selected 값 변경
optionList.forEach(o=>{
    o.addEventListener("click",()=>{
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionContainer.classList.remove("active");
    });
});