//promise 형식으로 콜백을 변경 시킬수 o
// 보통은 직접 변경하는것 보다는 promise롤 되어있는 함수를 가져다 쓰는걸 익히기
// 1. pending 단기 (대기하는 단계)
// 2. resolve pending 상태에서 resolve를 실행하면 fulfilled 이행
// 3. reject pending 상태에서 reject를 실행하면 rejected 상태가 된다.

new Promise((resolve, reject) => {
    // 요청 성공시 resolve 호출
    // if(버그 발생 시) { reject();}
})

const test = new Promise((resolve, reject) => {
    resolve(3);
})
// resolve인 경우 then으로 가져오고
// reject인 경우 catch로 가져온다.
test.then(el => console.log(el));

const test2 = new Promise((resolve, reject) => {
    reject(2);
}).then(el => console.log(el))
// resolve인 경우 then으로 가져오고
// reject인 경우 catch로 가져온다.
.catch(e => console.log(e));


const test3 = new Promise((resolve, reject) => {
    // 위도 경도
    resolve(3);
}).then(li => {
    //cosole.log(li) <- 위도, 경도가 나온다
    //API 호출을 해서 가져오면은 위도 경도를 가져온 채로 API 호출 가능
})

//setTimeout을 <- promise화 시킬 것

function promiseSetTimeout(time) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(1);
        }, time);
    });
}

// promise 형식은 .then .catch 붙이는게 가능하다
// 호출에 성공하고 나서 1초 후에 tehn으로 number 접근이 가능 o
promiseSetTimeout(1000).then(number => {
    console.log(number);
}).catch(error => {
    console.log(error);
})

//promise는 then을 여러개 붙일 수 있다.
promiseSetTimeout(1000).then(li => {
    return li + 1
}).then(number => {
    console.log(number)
})