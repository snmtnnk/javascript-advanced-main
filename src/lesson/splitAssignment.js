// ここにコードを書きながら確認しましょう！












// 練習問題
// 問題 1
function arrayFn(arg) {
  return ['jQuery', 'Vue', arg];
}

const [frontend1, frontend2, frontend3] = arrayFn('React');
console.log(frontend3);

// 問題 2
function objectFn({name}) {
  console.log(name);
}

const argObject = {
  name: 'Gizumo',
  place: 'Shibuya',
};

objectFn(argObject);
