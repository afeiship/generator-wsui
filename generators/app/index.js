"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const glob = require("glob");
const { resolve } = require("path");
const remote = require("yeoman-remote");
const yoHelper = require("@jswork/yeoman-generator-helper");
const replace = require("replace-in-file");

require("@jswork/next-npm-registries");

const NPM_CHOICES = ["npm", "github", "alo7", "null"].map((item) => {
  return { name: item, value: nx.npmRegistries(item) };
});

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the stunning ${chalk.red(
          "generator-wsui"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "scope",
        message: "Your scope (eg: `babel`)?",
        default: "jswork",
      },
      {
        type: "list",
        name: "registry",
        message: "Your registry",
        choices: NPM_CHOICES,
      },
      {
        type: "input",
        name: "project_name",
        message: "Your project_name (eg: like this `webkit-sassui-abc` )?",
        default: yoHelper.discoverRoot,
      },
      {
        type: "input",
        name: "description",
        message: "Your description?",
        validate: Boolean,
      },
    ];

    return this.prompt(prompts).then(
      function (props) {
        // To access props later use this.props.someAnswer;
        this.props = props;
        yoHelper.rewriteProps(props);
      }.bind(this)
    );
  }

  writing() {
    const done = this.async();
    remote("afeiship", "boilerplate-wsui", (_, cachePath) => {
      // Copy files:
      this.fs.copy(
        glob.sync(resolve(cachePath, "{**,.*}")),
        this.destinationPath()
      );
      done();
    });
  }

  end() {
    const { scope, project_name, description } = this.props;
    const files = glob.sync(resolve(this.destinationPath(), "{**,.*}"));

    replace.sync({
      files,
      from: [
        /boilerplate-scope/g,
        /boilerplate-wsui-description/g,
        /boilerplate-wsui/g,
      ],
      to: [scope, description, project_name],
    });
  }
};
