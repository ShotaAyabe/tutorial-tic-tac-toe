//React は、useState という特別な関数を提供しており、コンポーネントからこれを呼び出すことで「記憶」を行わせることができる。
//Square の現在の値を state に保存し、Square がクリックされたときにその値を変更する。
import { useState } from "react";

//自分で作成するコンポーネントである Board と Square は、大文字で始める。
//親コンポーネント
function Square({ value }) {
  //この set 関数を onClick ハンドラから呼び出すことで、<button> がクリックされるたびに React に Square を再レンダーするよう要求。
  return <button className="square">{value}</button>;
}

//JSX 構文を使用してこの Square コンポーネントをレンダーする
//子コンポーネント
export default function Board() {
  //9 個の要素を持つ配列を作成し、それぞれの要素を null に設定
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
