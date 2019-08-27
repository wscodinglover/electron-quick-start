function genarateDom(classList) {
  const parent = document.createElement("div");
  parent.classList.add("container-row");
  let total = 10;
  while (total > 0) {
    const span = document.createElement("span");
    span.classList.add(...classList);
    parent.appendChild(span);
    total--;
  }
  const contanier = document.querySelectorAll(".container-display__left")[0];
  contanier.appendChild(parent);
}

let total = 20;
while (total >= 0) {
  total--;
  genarateDom(["element"]);
}

function getTime() {
  const dataTime = new Date();
  const [hour, minutes, seconds] = [
    dataTime.getHours(),
    dataTime.getMinutes(),
    dataTime.getSeconds()
  ];

  const classListExist = [
    "digital-0",
    "digital-1",
    "digital-2",
    "digital-3",
    "digital-4",
    "digital-5",
    "digital-6",
    "digital-7",
    "digital-8",
    "digital-9"
  ];
  const timeContainer = document.querySelectorAll(".digital");
  timeContainer[0].classList.remove(...classListExist);
  timeContainer[1].classList.remove(...classListExist);
  timeContainer[3].classList.remove(...classListExist);
  timeContainer[4].classList.remove(...classListExist);
  timeContainer[6].classList.remove(...classListExist);
  timeContainer[7].classList.remove(...classListExist);

  timeContainer[0].classList.add(`digital-${(hour / 10) >> 0}`);
  timeContainer[1].classList.add(`digital-${hour % 10}`);
  timeContainer[2].classList.toggle(`digital-colon__off`);
  timeContainer[3].classList.add(`digital-${(minutes / 10) >> 0}`);
  timeContainer[4].classList.add(`digital-${minutes % 10}`);
  timeContainer[5].classList.toggle(`digital-colon__off`);
  timeContainer[6].classList.add(`digital-${(seconds / 10) >> 0}`);
  timeContainer[7].classList.add(`digital-${seconds % 10}`);
}

setInterval(() => {
  getTime();
}, 500);

const div = document.querySelectorAll(".container-display__left .container-row");
const length = div.length;
let totalLen = length;
function stepUp() {
  totalLen--;
  [...div[totalLen].children].forEach(item => {
    item.classList.add("element__border");
  });
  if (totalLen > 0) {
    window.requestAnimationFrame(stepUp);
  }
  if (totalLen === 0) {
    window.requestAnimationFrame(stepDown);
  }
}
function stepDown() {
  totalLen++;
  console.log("totalLen", totalLen);
  [...div[totalLen - 1].children].forEach(item => {
    item.classList.remove("element__border");
  });
  if (totalLen < length) {
    window.requestAnimationFrame(stepDown);
  }
}

// var elementArr = [[3],[2,3,4],[],[]]
var elementArr = [[2], [2], [2], [2]];

function element(index, diffNum) {
  elementArr.forEach((v, i) => {
    elementArr[i].forEach(value => {
      [...div[index - 1].children].forEach(item => {
        item.classList.remove("element__border");
      });
      // [...div[index+diffNum].children][1].classList.remove("element__border");

      // [...div[index+diffNum].children][3].classList.remove("element__border");

      // [...div[index].children][4].classList.remove("element__border");
      if(value){
        [...div[index + i].children][value].classList.add("element__border");
      }  
    });
  });
}

let dropIntegar = 0;
let dropTotal = length;
if (elementArr[3].length === 0) {
  dropTotal = dropTotal - 4;
} else if (elementArr[2].length === 0) {
  dropTotal = dropTotal - 2;
} else if (elementArr[3].length !== 0) {
  dropTotal = dropTotal - 5;
}

let diffNum = 0;
if (elementArr[3].length === 0 && elementArr[0].length === 0) {
  diffNum = 1;
} else if (elementArr[1].length === 0 && elementArr[0].length === 0) {
  diffNum = 2;
}

console.log("dropTotal", dropTotal);
let dropTimer = null;
dropTimer = setInterval(() => {
  dropIntegar++;
  console.log("dropIntegar", dropIntegar);
  element(dropIntegar, diffNum);
  if (dropIntegar > dropTotal) {
    dropIntegar = 0;
    clearInterval(dropTimer);
  }
}, 500);

function reset() {
  diffNum = 0;
  clearInterval(dropTimer);
  window.requestAnimationFrame(stepUp);
}

function start() {
  dropIntegar = 0;
  dropTimer = setInterval(() => {
    dropIntegar++;
    console.log("dropIntegar", dropIntegar);
    element(dropIntegar, diffNum);
    if (dropIntegar > dropTotal) {
      dropIntegar = 0;
      clearInterval(dropTimer);
    }
  }, 500);
}
/**
 *将源数组旋转90度
 *
 * @param {Array} arr 源数组
 * @returns {Array} 返回旋转90度后的数组
 */
function translateArr(arr) {
  let arrT = [[], [], [], []];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      arrT[3 - j][i] = arr[i][j];
    }
  }
  return arrT;
}
