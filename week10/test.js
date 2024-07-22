let guests = [];

const scrapePage = () => {
  let nameElements = document.querySelectorAll("div._name_em4437");
  let subInfoElements = document.querySelectorAll("div._sub-info_em4437");
  for (let i = 0; i < nameElements.length; i++) {
    let customerName = nameElements[i].textContent.trim();
    let subInfo = subInfoElements[i].textContent.trim();
    let [phoneNumber, email] = subInfo.split(" • ");
    guests.push({
      customerName: customerName,
      phoneNumber: phoneNumber,
      email: email,
    });
  }
};

const clickNextButton = () => {
  let paginator = document.querySelector("ul.paginator._pagination_romgbq");
  if (paginator) {
    let nextButton = paginator.querySelector("li:last-child button");
    if (nextButton) {
      nextButton.click();
      return true;
    }
  }
  return false;
};

const checkIfLastPage = () => {
  let activePageButton = document.querySelector("li.page.active._page_romgbq._active_romgbq");
  if (activePageButton) {
    let activePageNumber = activePageButton.textContent.trim();
    console.log("Active page number:", activePageNumber); // Debugging log
    if (activePageNumber === "80") {
      return true;
    }
  }
  return false;
};

const waitForNextPage = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000); // Adjust the delay as needed to allow the next page to load
  });
};

const scrapeAllPages = async () => {
  let hasNextPage = true;
  while (hasNextPage) {
    scrapePage();
    hasNextPage = !checkIfLastPage();
    if (!hasNextPage) {
      console.log("Reached page 80, stopping."); // Debugging log
      break;
    }
    hasNextPage = clickNextButton();
    if (hasNextPage) {
      await waitForNextPage();
    }
  }
  console.log("GuestList", guests);
};

scrapeAllPages();
