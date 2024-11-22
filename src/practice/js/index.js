import { $axios } from "./axiosHelper.js";
import { createErrorElement } from "./createElement.js";

window.addEventListener('DOMContentLoaded', () => {

  $axios('https://pokeapi.co/api/v2/pokemon/?limit=151').then(response => {
    // ポケモンの一覧情報を取得
    console.log(response);

    for (let i = 0; i < 151; i++) {
      $axios(response.data.results[i].url).then(response => {
        // ポケモンの詳細情報を取得
        // console.log(response);

        const img = response.data.sprites.other['official-artwork'].front_default;
        // 画像URLを取得

        $axios(response.data.species.url).then(response => {
          // 多言語のポケモンの名前を取得

          const p = response.data.names[0].name;
          // ポケモン名の日本語訳を取得  

          const list = document.getElementById('list');
          // ul要素を取得
          const li = document.createElement('li');
          li.classList.add('list-item');
          // li要素を作成
          const characterDiv = document.createElement('div');
          characterDiv.classList.add('character');
          // 画像を格納するdiv要素を追加
          const imgDiv = document.createElement('img');
          imgDiv.classList.add('character__img')
          imgDiv.src = img;
          imgDiv.alt = "アイコン"
          imgDiv.width = 475;
          imgDiv.height = 475;
          // img要素を追加
          const nameP = document.createElement('p');
          nameP.classList.add('character__name');
          nameP.textContent = p;
          // p要素を追加
          characterDiv.appendChild(imgDiv);
          // imgをdivに追加
          li.appendChild(characterDiv);
          li.appendChild(nameP);
          //divとpをliに追加
          list.appendChild(li);
          // 作成したli要素をulに追加

        }).catch(error => {
          const err = createErrorElement('エラーが発生しました。時間をおいて再度お試しください。');
          const main = document.querySelector('.main');
          main.appendChild(err);
        });

      }).catch(error => {
        const err = createErrorElement('エラーが発生しました。時間をおいて再度お試しください。');
        const main = document.querySelector('.main');
        main.appendChild(err);
      });
    };
  }).catch(error => {
    const err = createErrorElement('エラーが発生しました。時間をおいて再度お試しください。');
    const main = document.querySelector('.main');
    main.appendChild(err);
  });
});