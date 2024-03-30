function createCircle() {
  const circle = document.createElement("div");
  circle.className = "circle";
  const size = Math.floor(Math.random() * 50) + 6;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  const centerX = window.innerWidth / 2; // 画面の横中央
  const centerY = window.innerHeight / 2; // 画面の縦中央

//  const rangeX = window.innerWidth / 4; // 画面横幅の1/4
//  const rangeY = window.innerHeight / 4; // 画面縦幅の1/4
  const rangeX = window.innerWidth / 5; // 画面横幅の1/4
  const rangeY = window.innerHeight / 3; // 画面縦幅の1/4

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
    ["#006699", "#66ccff"],
    ["#6699cc", "#99ccff"],
    ["#003366", "#6699cc"],
    ["#003399", "#0066cc"],
    ["#0033cc", "#3366cc"],
    ["#000066", "#333399"],
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  circle.style.background = `radial-gradient(circle, ${randomColor[0]}, ${randomColor[1]})`;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  document.getElementById("container").appendChild(circle);
}

for (let i = 0; i < 5000; i++) {
  createCircle();
}
