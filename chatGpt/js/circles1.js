function createCircle() {
  const circle = document.createElement("div");
  circle.className = "circle";
  const size = Math.floor(Math.random() * 50) + 10; // ランダムなサイズを生成
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  const x = Math.random() * window.innerWidth; // ランダムなx座標を生成
  const y = Math.random() * window.innerHeight; // ランダムなy座標を生成
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  document.getElementById("container").appendChild(circle);
}

for (let i = 0; i < 300; i++) { // 10個の円を生成
  createCircle();
}
