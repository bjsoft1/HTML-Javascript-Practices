function remToPx(rem) {
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return parseFloat(rem) * rootFontSize;
}
const TOST_MESSAGE_CLASS = "tost-message";
function GetColor(messagType) {
  ///if (messagType === 0)
     return "rgb(76, 175, 80)";
  //else if (messagType === 1) "rgb(76, 175, 80)";
}
function ShowMessage(
  messagType = 0,
  title = "You have message",
  message = "Hello user, You have message.",
  timeOut = 2000
) {
  title = title + ` ${messagType}`;
  const color = GetColor();
  const margin = "1rem";
  const animation = `all 300ms`;
  const borderRadius = "0.3rem";
  const alternativeBackgroundColor = "rgb(220, 220, 220)";
  const body = document.body;
  if (!body) return;

  const messageBody = document.createElement("div");
  messageBody.classList.add(TOST_MESSAGE_CLASS);
  body.insertBefore(messageBody, body.firstChild);

  messageBody.style.userSelect = "none";
  messageBody.style.position = "fixed";
  messageBody.style.position = "fixed";
  messageBody.style.transition = animation;
  messageBody.style.right = margin;
  messageBody.style.minWidth = "16rem";
  messageBody.style.minHeight = "4rem";
  messageBody.style.overflow = "hidden";
  messageBody.style.borderRadius = borderRadius;
  messageBody.style.boxShadow = "0px 0px 7px rgb(50, 50, 50 ,0.2)";
  messageBody.style.display = "flex";
  messageBody.style.alignItems = "center";
  messageBody.style.padding = margin;
  messageBody.style.boxSizing = "border-box";

  const iconBox = document.createElement("div");
  const icon = document.createElement("ion-icon");
  iconBox.appendChild(icon);
  icon.name = "chatbubbles";
  icon.style.fontSize = "2.0rem";
  icon.style.color = color;

  const closeButton = document.createElement("ion-icon");
  closeButton.name = "close";
  messageBody.appendChild(closeButton);
  closeButton.style.position = "absolute";
  closeButton.style.top = `calc(${margin} / 2 )`;
  closeButton.style.right = `calc(${margin} / 2 )`;
  closeButton.style.cursor = "pointer";
  closeButton.style.padding = `calc(${margin} / 2 )`;
  closeButton.style.transition = animation;
  closeButton.style.borderRadius = borderRadius;

  closeButton.addEventListener("mouseenter", function () {
    closeButton.style.backgroundColor = alternativeBackgroundColor;
  });
  closeButton.addEventListener("mouseleave", function () {
    closeButton.style.backgroundColor = "transparent";
  });

  closeButton.addEventListener("click", function () {
    messageBody.style.right = `-${messageBody.clientWidth}px`;
    messageBody.classList.add("removed");
    setTimeout(() => {
      body.removeChild(messageBody);
    }, 10000);
    updateMessagePositions(margin);
  });
  messageBody.appendChild(iconBox);

  setTimeout(() => {
    closeButton.click();
  }, timeOut);

  const textBox = document.createElement("div");
  textBox.style.flexGrow = 1;
  textBox.style.paddingLeft = margin;
  textBox.style.paddingRight = margin;
  messageBody.appendChild(textBox);

  const titleElement = document.createElement("h4");
  titleElement.innerText = title;
  titleElement.style.color = color;
  textBox.appendChild(titleElement);

  const messageElement = document.createElement("p");
  textBox.appendChild(messageElement);
  messageElement.innerText = message;
  messageElement.style.color = color;

  updateMessagePositions(margin);
}

function updateMessagePositions(margin) {
  const marginPx = remToPx(margin);
  const messages = document.querySelectorAll(`.${TOST_MESSAGE_CLASS}`);
  let index = 0;
  messages.forEach((m) => {
    if (!m.classList.contains("removed")) {
      const _m = index === 0 ? margin : `${(marginPx * (index + 2)) / 2}px`;
      m.style.top = `calc(${
        index * m.clientHeight + m.clientTop + index
      }px + ${_m})`;
      top = m.clientTop;
      index++;
    }
  });
}

//Success
ShowMessage(
  0,
  "You have message",
  "This function retrieves the computed style of an element",
  5000
);

//Information
ShowMessage(
  1,
  "You have message",
  "This function retrieves the computed style of an element",
  2000
);

//Warning
ShowMessage(
  2,
  "You have message",
  "This function retrieves the computed style of an element",
  3000
);

//Error
ShowMessage(
  3,
  "You have message",
  "This function retrieves the computed style of an element",
  4000
);
