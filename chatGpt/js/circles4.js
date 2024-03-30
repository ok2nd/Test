function createCircle() {
  const circle = document.createElement("div");
  circle.className = "circle";
  const size = Math.floor(Math.random() * 50) + 10;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  const centerX = window.innerWidth / 2; // 画面の横中央
  const centerY = window.innerHeight / 2; // 画面の縦中央
  const rangeX = window.innerWidth / 2; // 画面横幅の1/2
  const rangeY = window.innerHeight / 2; // 画面縦幅の1/2

  // 新しい円の座標を生成する
  let x = centerX + (Math.random() * rangeX - rangeX / 2);
  let y = centerY + (Math.random() * rangeY - rangeY / 2);

  // 画面外に出る場合は座標を調整する
  if (x < size / 2) {
    x = size / 2;
  } else if (x > centerX + rangeX / 2 - size / 2) {
    x = centerX + rangeX / 2 - size / 2;
  }
  if (y < size / 2) {
    y = size / 2;
  } else if (y > centerY + rangeY / 2 - size / 2) {
    y = centerY + rangeY / 2 - size / 2;
  }

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  document.getElementById("container").appendChild(circle);
}

for (let i = 0; i < 200; i++) {
  createCircle();
}
