const success = document.querySelector(".success-modal");
const info = document.querySelector(".info-modal");
const warning = document.querySelector(".warning-modal");
const danger = document.querySelector(".danger-modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

let successFlag, infoFlag, warningFlag, dangerFlag;

const openModal = function (typModal) {
  typModal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

const closeModal = function (typModal) {
  typModal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-success")) {
      openModal(success);
      successFlag = true;
    } else if (event.target.classList.contains("btn-info")) {
      openModal(info);
      infoFlag = true;
    } else if (event.target.classList.contains("btn-warning")) {
      openModal(warning);
      warningFlag = true;
    } else {
      openModal(danger);
      dangerFlag = true;
    }
  });
for (let i = 0; i < btnCloseModal.length; i++)
  btnCloseModal[i].addEventListener("click", function (event) {
    if (event.target.parentNode.classList.contains("success-modal")) {
      closeModal(success);
      successFlag = false;
    } else if (event.target.parentNode.classList.contains("info-modal")) {
      closeModal(info);
      infoFlag = false;
    } else if (event.target.parentNode.classList.contains("warning-modal")) {
      closeModal(warning);
      warningFlag = false;
    } else {
      closeModal(danger);
      dangerFlag = false;
    }
  });

overlay.addEventListener("click", function (event) {
  if (successFlag) {
    closeModal(success);
    successFlag = false;
  } else if (infoFlag) {
    closeModal(info);
    infoFlag = false;
  } else if (warningFlag) {
    closeModal(warning);
    warningFlag = false;
  } else {
    closeModal(danger);
    dangerFlag = false;
  }
});
