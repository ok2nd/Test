function createCircle() {
  const circle = document.createElement("div");
  circle.className = "circle";
  const size = Math.floor(Math.random() * 50) + 10;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  // 新しい円の座標を生成する
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  // 既存の円と座標が重なる場合は、座標を再生成する
  const circles = document.querySelectorAll(".circle");
  for (let i = 0; i < circles.length; i++) {
    const existingCircle = circles[i];
    const left1 = x;
    const right1 = x + size;
    const top1 = y;
    const bottom1 = y + size;
    const left2 = parseInt(existingCircle.style.left);
    const right2 = left2 + parseInt(existingCircle.style.width);
    const top2 = parseInt(existingCircle.style.top);
    const bottom2 = top2 + parseInt(existingCircle.style.height);
    const overlaps = left1 < right2 && right1 > left2 && top1 < bottom2 && bottom1 > top2;
    if (overlaps) {
      x = Math.random() * window.innerWidth;
      y = Math.random() * window.innerHeight;
      i = -1; // 既存の円と重なる可能性があるため、再度全ての既存の円と比較する
    }
  }

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  document.getElementById("container").appendChild(circle);
}

for (let i = 0; i < 200; i++) {
  createCircle();
}
