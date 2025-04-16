document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello World");

  // Alert button
  document.getElementById("alertMe").onclick = function () {
    alert("Hello from FloraBloom!");
  };

  // Hover button color change
  const hoverBtn = document.getElementById("hoverButton");
  hoverBtn.onmouseover = function () {
    hoverBtn.style.background = "lightblue";
  };
  hoverBtn.onmouseleave = function () {
    hoverBtn.style.background = "white";
  };

  // Counter + If-Else
  let count = 0;
  document.getElementById("buttonCounter").onclick = function () {
    count += 1;
    const counter = document.getElementById("counter");
    counter.innerHTML = count;

    if (count % 2 === 0) {
      counter.style.color = "green"; // even
    } else {
      counter.style.color = "purple"; // odd
    }
  };

  // For loop message printing
  const container = document.getElementById("container");
  for (let i = 1; i <= 5; i++) {
    const msg = document.createElement("p");
    msg.textContent = "This is message #" + i;
    container.appendChild(msg);
  }
});
