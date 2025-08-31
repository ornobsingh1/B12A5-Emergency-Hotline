const hearts = document.querySelectorAll(".heart-icon");
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    const countHeart = document.getElementById("count-heart").innerText;
    const currentHeart = Number(countHeart) + 1;
    document.getElementById("count-heart").innerText = currentHeart;
  });
}

const callButtons = document.querySelectorAll(".call-btn");
for (const callBtn of callButtons) {
  callBtn.addEventListener("click", function () {
    const serviceTitle = callBtn.parentNode.parentNode.children[1].innerText;
    const serviceSubTitle = callBtn.parentNode.parentNode.children[2].innerText;
    const serviceNumber = callBtn.parentNode.parentNode.children[3].innerText;
    const currentTime = new Date().toLocaleTimeString();

    let countCoin = parseInt(document.getElementById("count-coin").innerText);
    if (countCoin >= 20) {
      countCoin -= 20;
      document.getElementById("count-coin").innerText = countCoin;
      alert(`Calling ${serviceSubTitle} Service ${serviceNumber}...`);
    } else {
      return alert("Not Enough Coins");
    }

    const cartContainer = document.getElementById("cart-container");
    const newCart = document.createElement("div");
    newCart.innerHTML = `
      <div
         class="flex justify-between items-center bg-gray-100 p-2 rounded-xl my-3"
          >
          <div class="w-5/6">
            <h2 class="font-semibold">${serviceTitle}</h2>
            <h4 class="text-gray-600">${serviceNumber}</h4>
          </div>
          <div>
            <p class="text-gray-600">${currentTime}</p>
          </div>
      </div>
    `;
    cartContainer.appendChild(newCart);
  });
}

const copyButtons = document.querySelectorAll(".copy-btn");
for (const copyBtn of copyButtons) {
  copyBtn.addEventListener("click", function () {
    const serviceNumber = copyBtn.parentNode.parentNode.children[3].innerText;
    navigator.clipboard.writeText(serviceNumber);

    let countCopy = parseInt(document.getElementById("count-copy").innerText);
    countCopy += 1;

    document.getElementById("count-copy").innerText = countCopy;

    alert("Number Copied Successfully");
  });
}

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("cart-container").innerHTML = "";
});
