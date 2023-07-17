module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create new component...",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/Components/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/component.jsx.hbs",
      },
      {
        type: "add",
        path: "src/Components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
      },
    ],
  });
  plop.setGenerator("page", {
    description: "Create new page...",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Page name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/Pages/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/component.jsx.hbs",
      },
      {
        type: "add",
        path: "src/Pages/{{pascalCase name}}/{{pascalCase name}}.module.scss",
      },
    ],
  });
};
