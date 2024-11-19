import 'animate.css';

// ここにコードを書きながら確認しましょう！


const title = document.getElementById('title');
const button = document.getElementById('button');

const nodeType = document.querySelector('.card-type--mocha');
const eventType = document.querySelector('.card-type--yellow');


button.addEventListener('click', () => {
  // title要素に.animate__hingeクラスを付与
  title.classList.add('animate__hinge');
  // 2秒後にtitle要素から.animate__hingeクラスを削除
  setTimeout(() => {
    title.classList.remove('animate__hinge');
    nodeType.classList.add('card-animation');
    eventType.style.display = 'block';
    eventType.classList.add('animate__fadeInUp');
  }, 2000);
});



// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑
