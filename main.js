// card-1

const donationBtn = document
  .getElementById("donation-btn")
  .addEventListener("click", function () {
    const carentBlance = parseFloat(
      document.getElementById("upp-btn").innerText
    );

    const inputAddMoney = getInputFildValuBy("input-add-money");
    if (isNaN(inputAddMoney) || inputAddMoney < 0) {
      alert("rong");

      return;
    }
    const addMOney = getTextFildByid("add-money");
    const blance = inputAddMoney + addMOney;
    document.getElementById("add-money").innerText = blance;
    const totalBlance = carentBlance - inputAddMoney;

    document.getElementById("upp-btn").innerText = totalBlance;

    const myModal = document.getElementById("my_modal_1");
    myModal.showModal();

    // addHistory(inputAddMoney, donationName);
    // const donationName = "Aid for Injured in the Quota Movement";
  });

// card-2

const donitionBtn = document
  .getElementById("donation-btn-2")
  .addEventListener("click", function () {
    const carentBlance = parseFloat(
      document.getElementById("upp-btn").innerText
    );

    const inputAddMoney = getInputFildValuBy("input-add-money-2");
    if (isNaN(inputAddMoney) || inputAddMoney < 0) {
      alert("rong");

      return;
    }
    const addMOney = getTextFildByid("add-money-2");
    const blance = inputAddMoney + addMOney;
    document.getElementById("add-money-2").innerText = blance;
    const totalBlance = carentBlance - inputAddMoney;

    document.getElementById("upp-btn").innerText = totalBlance;
  });

// card-3

const donation_Btn = document
  .getElementById("donation-btn-3")
  .addEventListener("click", function () {
    const carentBlance = parseFloat(
      document.getElementById("upp-btn").innerText
    );

    const inputAddMoney = getInputFildValuBy("input-add-money-3");
    if (isNaN(inputAddMoney) || inputAddMoney < 0) {
      alert("rong");

      return;
    }
    const addMOney = getTextFildByid("add-money-3");
    const blance = inputAddMoney + addMOney;
    document.getElementById("add-money-3").innerText = blance;
    const totalBlance = carentBlance - inputAddMoney;

    document.getElementById("upp-btn").innerText = totalBlance;
  });

const historyTabe = document.getElementById("history-tab");

const donationTabe = document.getElementById("Donation-tab");

const historyList = document.getElementById("history-list");
// history btn
historyTabe.addEventListener("click", function () {
  historyTabe.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  donationTabe.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  const inputAddMoney = document.getElementById("input-add-money").value;

  document.getElementById("main-input").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
  console.log(inputAddMoney);
  const historyIteam = document.createElement("div");
  historyIteam.className = "bg-gray-300 p-5 border mt-5 rounded-sm";
  historyIteam.innerHTML = `
             <h1>${inputAddMoney} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
             <p>${new Date()}</p>
             `;
  const historyList = document.getElementById("history-list");
  historyList.appendChild(historyIteam);
});

const donation_Tabe = document.getElementById("donationTabe");
donationTabe.addEventListener("click", function () {
  donationTabe.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  historyTabe.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("main-input").classList.remove("hidden");
});
