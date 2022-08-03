const className = '___BIONIC-READING__';

function addTags() {
  let styleTags = document.body.getElementsByTagName('style');
  let styleContents = [];

  for (let tag of styleTags) {
    styleContents.push(tag.innerHTML);
  }

  console.log(styleContents);

  for (let tag of styleTags) {
    tag.remove();
  }

  const regex = /(?<!(<\/?[^>]*|&[^;]*))([^\s<]+)/g;

  const content = document.body.innerHTML;

  const subst = `<span class="${className}">$&</span>`;

  document.body.innerHTML = content.replace(regex, subst);

  for (let cont of styleContents) {
    console.log(cont);
    let style = document.createElement('style');
    style.innerHTML = cont;
    document.body.appendChild(style);
  }
}

String.prototype.insert = function (index, string) {
  const ind = index < 0 ? this.length + index : index;
  return this.substring(0, ind) + string + this.substr(ind);
};

function main() {
  addTags();

  let words = document.getElementsByClassName(className);
  for (let elem of words) {
    let word = elem.innerText;
    let length = word.length;
    let half = Math.floor(length / 2);
    word = word.insert(half, '</strong>');
    word = '<strong>' + word;
    elem.innerHTML = word;
  }
}

main();
