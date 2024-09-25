const historyTabe = document.getElementById("history-tab");
const donationTabe = document.getElementById("Donation-tab");

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
  document.getElementById("main-input").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

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

const donationSystem = (id, address) => {
  my_modal_1.showModal();
  const inputAddMoney = getInputFildValuBy(id);

  const carentBlance = parseFloat(document.getElementById("upp-btn").innerText);

  const addMOney = getTextFildByid("add-money");
  const blance = inputAddMoney + addMOney;
  document.getElementById("add-money").innerText = blance;
  const totalBlance = carentBlance - inputAddMoney;

  document.getElementById("upp-btn").innerText = totalBlance;

  console.log(inputAddMoney);
  const historyIteam = document.createElement("div");
  historyIteam.className = "bg-gray-300 p-5 border mt-5 rounded-sm";
  historyIteam.innerHTML = `
             <h1>${inputAddMoney} Taka is Donated for famine-2024 at ${address}</h1>
             <p>${new Date()}</p>
             `;
  const historyList = document.getElementById("history-list");
  historyList.appendChild(historyIteam);
};
