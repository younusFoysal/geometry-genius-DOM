
const results = [];

function triangleArea (className1, className2, polygon) {
  let b = document.querySelector(className1);
  let h = document.querySelector(className2);
  let area = 0.5 * Number(b.value) * Number(h.value);
  console.log(area);
  results.push({name: polygon, result: area});
  console.log(results);
  renderResult();
}

function rectangleArea (className1, className2, polygon) {
  let b = document.querySelector(className1);
  let h = document.querySelector(className2);
  let area = Number(b.value) * Number(h.value);
  console.log(area);
  results.push({name: polygon, result: area});
  console.log(results);
  renderResult();
}

function elipseArea (className1, className2, polygon) {
  let b = document.querySelector(className1);
  let h = document.querySelector(className2);
  let area = 3.14 * Number(b.value) * Number(h.value);
  results.push({name: polygon, result: area.toFixed(2)});
  console.log(results);
  renderResult();
}

function renderResult () {
  let resultHtml = ``;
  results.forEach((result, index)=> {
    resultHtml += ` <div class="flex justify-between items-center border rounded-lg flex-wrap p-3">
    <span>${index+1}. ${result.name}</span><span class="${result.name}${index}">${result.result}cm<sup>2</sup></span>
    <button class="bg-[#1090D8] p-2 text-sm font-medium text-white rounded-lg" onclick="metreConvert('.${result.name}${index}', ${result.result})">Covert to m<sup>2</sup></button>
  </div>`;
  });
  let resultContainer = document.querySelector('.result-container');
  resultContainer.innerHTML = resultHtml;
}

function metreConvert (className, resultcm) {
  let resultInCm = document.querySelector(className);
  console.log(resultInCm);
  let resultInM = resultcm / 10000;
  resultInCm.innerHTML = `<span class="${className}">${resultInM}m<sup>2</sup></span>`;
}

let cards = document.querySelectorAll('.card');

// generates random color
function randomColor() {
  const colors = ['pink', 'yellow', 'yellowgreen', 'orange', 'skyblue'];
  let randomI = Math.floor(Math.random() * colors.length);
  return colors[randomI];
}

cards.forEach((card)=> {
  card.addEventListener('mouseenter', ()=> {
    let color = randomColor();
    card.style.backgroundColor = color;
  });

  card.addEventListener('mouseleave', ()=>{
    card.removeAttribute('style');
  })

})