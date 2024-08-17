interface Mount {
  container: HTMLElement;
  where: "before" | "after";
}

function onDragStart(e: DragEvent, id: string) {
  // Set the type of element
  e.dataTransfer?.setData("data/json", JSON.stringify({ id }));
}

export function render(mount: Mount, { name }: { name: string }) {
  const elementWrapper = document.createElement("div");
  elementWrapper.className = "element";
  elementWrapper.draggable = true;
  elementWrapper.innerHTML = `
        <p>${name}</p>
    `;

  elementWrapper.ondragstart = (e) => onDragStart(e, name);
  mount.container.insertAdjacentElement(
    mount.where == "before" ? "afterbegin" : "beforeend",
    elementWrapper
  );
  return elementWrapper;
}
