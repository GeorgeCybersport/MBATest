import setData from "./setData.js";

const fillingList = (list, module) => {
  list.forEach((li, index) => {
    if (module[index]) {
      li.childNodes[0].innerHTML = module[index];
    } else {
      li.classList.add("hidden");
    }
  });
};

const fillingModule = (contentModule, modules) => {
  const contentModuleChildren = [
    contentModule.childNodes[1],
    contentModule.childNodes[3],
  ];
  modules.forEach((module, index) => {
    if (module.length === 0) {
      contentModuleChildren[index].classList.add("hidden");
      return;
    }
    const list = contentModuleChildren[index].childNodes[3];
    const liArr = [];
    list.childNodes.forEach((elem) => elem.classList && liArr.push(elem));
    fillingList(liArr, module);
  });
};

export default async () => {
  const data = await setData();
  const titles = document.getElementsByClassName("content__title");
  const contentModules = document.getElementsByClassName("content__modules");
  data.forEach((elem, index) => {
    titles[index].innerText = elem.title;
    fillingModule(contentModules[index], elem.modules);
  });
};
