import fillingElems from "./components/fillingElems";

fillingElems();

function listner() {
  const modules = [...document.getElementsByClassName("content__module")];
  [].forEach.call(modules, function (el) {
    el.addEventListener("click", (event) => {
      if (screen.width <= 576) {
        event.target.classList.toggle("active");
        event.target.nextElementSibling.style.height =
          event.target.nextElementSibling.style.height !==
          event.target.nextElementSibling.scrollHeight + "px"
            ? event.target.nextElementSibling.scrollHeight + "px"
            : 0 + "px";
      }
    });
  });
  window.addEventListener("resize", function () {
    //alert("Размеры окна изменились");
    console.log(123);
    if (screen.width > 576) {
      [].forEach.call(modules, function (el) {
        el.nextElementSibling.style.height =
          el.nextElementSibling.scrollHeight + "px";
      });
    } else {
      [].forEach.call(modules, function (el) {
        el.nextElementSibling.style.height = el.classList.contains("active")
          ? el.nextElementSibling.scrollHeight + "px"
          : "0px";
      });
    }
  });
}
listner();
