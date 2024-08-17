import "./styles.css";

interface Mount {
  container: HTMLElement;
  where: "before" | "after";
}

function onDragOver(e: DragEvent) {
  e.preventDefault();
}

const elements = {
  button: { create: (content: string) => `<button>${content}</button>` },
  heading: {
    create: (content: string) => `<h1 contenteditable="true">${content}</h1>`,
  },
  paragraph: {
    create: (content: string) => {
      return `<p contenteditable="true">${content}</p>`;
    },
  },
};

function getElement(id: string) {
  return elements[id.toLowerCase()];
}

function onDrop(e: DragEvent) {
  const jsonData = e.dataTransfer?.getData("data/json");
  const { id } = JSON.parse(jsonData || "{}");

  // Get the element from the id
  const html = getElement(id).create("Initial");
  e.target.insertAdjacentHTML("beforeend", html);
}

export function render(mount: Mount, { name }: { name: string }) {
  const elementWrapper = document.createElement("div");
  elementWrapper.className = "drop-zoon";
  elementWrapper.innerHTML = `
      
    `;
  elementWrapper.ondragover = onDragOver;
  elementWrapper.ondrop = onDrop;
  mount.container.insertAdjacentElement(
    mount.where == "before" ? "afterbegin" : "beforeend",
    elementWrapper
  );
  return elementWrapper;
}
