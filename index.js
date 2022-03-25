"use strict";

function buildButton() {

	var button = document.createElement('button');
	button.textContent = 'title';
	button.className = 'className';

	button.addEventListener('click', init());

	return button;

}
buildButton()

function init() {
  setTimeout(() => {
    let states = document.querySelectorAll("div.builder-node-container");
    for (let state of states) {
      let tags = state.children[1];
      let tagsNode = tags.children[1];

      if (tagsNode.hasChildNodes()) {
        let childTags = tagsNode.lastChild;
        let tagStyles = childTags.children[0].style;

        childTags.children[0].style.border = "1px solid white";
        state.style.background = tagStyles.background;
        state.style.color = "white";
      }
    }
  }, 10000);
}
  // setTimeout(() => {
  //   init();
  // }, 10000);
