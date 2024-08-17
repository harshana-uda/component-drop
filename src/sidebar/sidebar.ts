import "./styles.css";

export function render(
  mountPoint: HTMLElement,
  where: "before" | "after"
): HTMLElement | never {
  mountPoint.insertAdjacentHTML(
    where == "before" ? "afterbegin" : "beforeend",
    `<aside class="side-bar">Sidebar</aside> `
  );
  return document.querySelector(".side-bar") as HTMLElement;
}
