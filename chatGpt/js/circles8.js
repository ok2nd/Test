function createCircle() {
  const circle = document.createElement("div");
  circle.className = "circle";
  const size = Math.floor(Math.random() * 50) + 10;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  const centerX = window.innerWidth / 2; // 画面の横中央
  const centerY = window.innerHeight / 2; // 画面の縦中央
  const rangeX = window.innerWidth / 4; // 画面横幅の1/4
  const rangeY = window.innerHeight / 4; // 画面縦幅の1/4

  let x, y;
  do {
    // 新しい円の座標を楕円の方程式に従って生成する
    x = Math.floor(Math.random() * rangeX * 2) + centerX - rangeX;
    y = Math.floor(Math.random() * rangeY * 2) + centerY - rangeY;
  } while (
    ((x - centerX) / rangeX) ** 2 + ((y - centerY) / rangeY) ** 2 > 1
  );

  // ランダムな色を選択する
  const colors = [
    "#FFE4C4", // ビスケット
    "#FFDAB9", // ピーチパフ
    "#FFA07A", // ライトサーモン
    "#FF8C00", // ダークオレンジ
    "#FF6347", // トマト
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const lightColor = shadeColor(randomColor, 20); // 淡い色
  circle.style.background = `radial-gradient(circle, ${lightColor}, ${randomColor})`;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  document.getElementById("container").appendChild(circle);
}

// カラーコードを指定された値で調整する関数
function shadeColor(color, percent) {
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  const newColor =
    "#" +
    (R < 255 ? (R < 1 ? "00" : ("0" + R.toString(16))) : "ff") +
    (G < 255 ? (G < 1 ? "00" : ("0" + G.toString(16))) : "ff") +
    (B < 255 ? (B < 1 ? "00" : ("0" + B.toString(16))) : "ff");
  return newColor;
}

for (let i = 0; i < 20; i++) {
  createCircle();
}
