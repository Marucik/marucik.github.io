let content = data;
let gliderElement = document.querySelector('.glider-track');
let techContainerElement = document.querySelector('.technologiesContainer');

for (let i = 0; i < content.projects.length; i++) {
  let object = content.projects[i];

  let card = document.createElement('div');
  card.classList.add('carousellElement');

  let title = document.createElement('h2');
  title.classList.add('textCenter');
  title.textContent = object.name;

  let link = document.createElement('a');
  let href = document.createAttribute('href');
  let target = document.createAttribute('target');
  href.value = object.link;
  target.value = "_blank";
  link.setAttributeNode(href);
  link.setAttributeNode(target);

  let icon = document.createElement('i');
  icon.classList.add("fab", "fa-github-alt", "fa-2x");

  let description = document.createElement('p');
  description.classList.add('textCenter');
  description.textContent = object.description;

  link.appendChild(icon);
  title.appendChild(link);

  card.appendChild(title);
  card.appendChild(description);

  gliderElement.appendChild(card);
}

for (let i = 0; i < content.tech.length; i++) {
  const object = content.tech[i];

  let block = document.createElement('div');
  block.classList.add('techBlock');

  let name = document.createElement('p');
  name.textContent = object.name;

  let level = document.createElement('p');
  level.textContent = object.level;

  block.appendChild(name);
  block.appendChild(level);

  techContainerElement.appendChild(block);
}
