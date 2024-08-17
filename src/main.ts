import "./styles.css";
import * as sidebar from "./sidebar/sidebar";
import * as element from "./element";
import * as workingContainer from "./working-container/working-container";

const app = document.querySelector<HTMLDivElement>("#app")!;

const sidebarContianer = sidebar.render(app, "after");

const availableElements = ["Heading", "Paragraph", "Image", "Avatar", "Button"];
availableElements.forEach((name) => {
  element.render({ container: sidebarContianer!, where: "after" }, { name });
});

workingContainer.render({ container: app, where: "after" }, { name: "test" });

const rightSideBar = sidebar.render(app, "after");
const changableStyles = [
  "typeface",
  "font-size",
  "font-weight",
  "color",
  "bg-color",
];

changableStyles.forEach((name) => {});
