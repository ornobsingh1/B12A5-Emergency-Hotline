const callButtons = document.getElementsByClassName("call-btn");
for (const callBtn of callButtons) {
  callBtn.addEventListener("click", function () {
    const serviceTitle = callBtn.parentNode.parentNode.children[1].innerText;
    const serviceNumber = callBtn.parentNode.parentNode.children[3].innerText;
    const currentTime = new Date().toLocaleTimeString();

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
