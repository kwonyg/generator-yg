const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
  }

  // first stage
  async prompting() {
    this.log("YG generator starting...");

    this.answers = await this.prompt([
      {
        type: "list",
        name: "type",
        message: "Please select the type of scaffolding.",
        choices: ["react"],
      },
      {
        type: "input",
        name: "projectName",
        message: "Input the project name for this project",
        validate: (input) => Boolean(input.length),
      },
    ]);
  }

  writing() {
    this.log("Writing files... 📝");

    const { type, projectName } = this.answers;
    switch (type) {
      case "react": {
        this.fs.copyTpl(
          this.templatePath("react"),
          this.destinationPath(projectName),
          {
            projectName,
          },
          null,
          { globOptions: { dot: true } }
        );
        break;
      }

      default: {
        throw Error("no type");
      }
    }
  }

  // last stage
  end() {
    this.log("Bye... 👋");
  }
};
