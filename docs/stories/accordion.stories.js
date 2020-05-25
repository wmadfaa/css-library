import "@css-library/accordion";

export default {
  title: "Components/Accordion",
};

export const Accordion = () => {
  const root = document.createElement("div");
  root.classList.add("accordion");

  const renderItem = (title, content) => {
    const item = document.createElement("div");
    item.classList.add("accordion-item");

    const itemHeading = document.createElement("h3");
    itemHeading.classList.add("accordion-itemHeading");

    const itemHeader = document.createElement("button");
    itemHeader.setAttribute("type", "button");
    itemHeader.classList.add("accordion-itemHeader");
    itemHeader.innerText = `accordion header ${title}`;

    itemHeader.onclick = () => {
      item.classList.toggle("is-open");
    };

    const itemContent = document.createElement("div");
    itemContent.classList.add("accordion-itemContent");
    itemContent.innerText = `accordion content ${content}`;

    itemHeading.appendChild(itemHeader);

    item.appendChild(itemHeading);
    item.appendChild(itemContent);

    return item;
  };

  for (let i = 0; i < 4; i++) {
    root.appendChild(renderItem(i, i));
  }

  return root;
};
