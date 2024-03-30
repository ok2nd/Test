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
  const colorHue = Math.floor(Math.random() * 30) + 15; // オレンジ系の色相 (15-45)
  const lightness = Math.floor(Math.random() * 30) + 60; // 淡い色の輝度 (60-90)
  const saturation = Math.floor(Math.random() * 30) + 60; // 淡い色の彩度 (60-90)
  const randomColor = `hsl(${colorHue}, ${saturation}%, ${lightness}%)`;
  const lightColor = `hsl(${colorHue}, ${saturation}%, ${lightness + 20}%)`;
  circle.style.background = `radial-gradient(circle, ${lightColor}, ${randomColor})`;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  document.getElementById("container").appendChild(circle);
}

for (let i = 0; i < 20; i++) {
  createCircle();
}
