// ここにコードを書きながら確認しましょう！












// 練習問題
// 問題 1
const returnPromise = () => {
  return new Promise((_resolve, reject) => {
    if (Math.random() < 0.5) {
      _resolve('成功しました');
    } else{
      reject('エラーが発生しました');
    }
  });
};

returnPromise().then(resolve => {
  console.log(resolve);
})
.catch(error => {
  console.log(error);
});