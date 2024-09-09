# public_cli_min

前端编码规范工程化脚手架(通用版)

## :mountain: 能力支持

### 1. 完善的规范生态

支持对全部前端配置实现一键接入、一键扫描、一键修复、一键升级

### 2. 支持 `Typescript`

提供完整的类型注释，从 0~1 掌握完整的前端规范化

### 3. 完整的测试用例

配套完整的测试用例，提升项目健壮性

## :star: 设计目的

随着前端技术的发展，前端项目正在变得越来越复杂。`JavaScript` 作为一门弱类型解释性编程语言，其灵活多变的语法极大的提高了前端开发效率，但同时也存在一系列问题。在大型项目开发过程中，代码维护所占的时间比重往往大于新功能的开发。因此编写符合团队编码规范的代码是至关重要的。 一致性的代码规范可以增强团队开发协作效率、提高代码质量、减少遗留系统维护的负担。但是每个人的代码编写喜好不同，代码风格也会迥然不同，若要一个团队内所有的成员都能发挥最大程度的价值，一个具有普适性的标准是必不可少的。

那么，如何制定前端团队的代码规范，如何在团队内进行最小成本的推广，就是一个合格的前端架构师面临的一大难题。很多团队的基础建设都只是简单地知晓其中一部分规范工具的使用，但却没有一套完整的工程化产出来助力研发同学实现规范落地。因此，如果我们能够产出一套完整化的前端编码规范工具，都会对不仅能够解决存量项目的编码异味，还能够保证后续所有项目的编码质量。

## :bulb: 为什要学习前端工程化

1. 通过 `monorepo` 和 `pnpm` 的多包管理方式开发一套多 `npm` 包的管理方式，以及如何将发包流程植入 `CI` 实现自动化发布，以及`CHANGLOG`的自动化更新部署；
2. 在现有前端前沿的研发流程下，我们可以通过哪些工具提升项目的编码规范，并提供配套工具的最佳实践，包括但不限于`eslint`、`stylelint`、`commitlint`、`markdownlint`、`husky`等，以及如何将单元测试植入配套工具的具体实现；
3. 学习如何通过脚手架的方式，以交互式形式一键接入，实现对`JavaScript`、`Typescript`、`React`、`Vue`等不同类型的前端项目下的标准的语法限制；
4. 对存量项目进行优化：对于存量代码不符合规范的问题，支持一键扫描和一键修复，一键式的修复存量问题，最小化存量代码的更新成本；
5. 对新项目添加规范：支持一键接入新增项目，通过结合`gitpre-commit`钩子，对提交文件进行编码规范的扫描；同时通过`husky`的`commit-msg`钩子，对本次代码提交`message`的格式进行扫描。

## :couch_and_lamp: 配套工具

引入了多个业界流行的 `Linter` 作为规约文档的配套工具，并根据规约内容定制了对应的规则包，它们包括：

| 规约                                                              | Lint 工具                                                  | npm 包 |
| ----------------------------------------------------------------- | ---------------------------------------------------------- | ------ |
| JavaScript 编码规范 <br/> TypeScript 编码规范 <br/> Node 编码规范 | [ESLint](https://eslint.org/)                              |
| CSS 编码规范                                                      | [stylelint](https://stylelint.io/)                         |
| Git 规范                                                          | [commitlint](https://commitlint.js.org/#/)                 |
| 文档规范                                                          | [markdownlint](https://github.com/DavidAnson/markdownlint) |

收敛屏蔽了上述依赖和配置细节，提供简单的 `CLI` 和 `Node.js API`，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规约的成本。

## 其他

## 多包

全局安装`lerna`

```bash
   npm install -g lerna
```

## 测试`markdown config`

全局安装`markdownlint-cli`

```bash
npm i -g markdownlint-cli
pnpm run lint
```

### 生成`CHANGELOG`

参考[conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli)，全局安装`conventional-changelog-cli`：

```bash
npm install -g conventional-changelog-cli
pnpm run changelog
```

### 设置`husky`

```bash
pnpm husky install
```

### 命令使用

```bash
    # 限制只能使用pnpm
    "preinstall": "npx only-allow pnpm",
    # 打包和发布之前执行 husky 的commit检查
    "prepare": "husky install",
    # 初始化命令
    "init": "pnpm install",
    # lerna 清理依赖
    "clean": "lerna clean && rm -rf node_modules",
    # lerna 单元测试
    "test": "lerna run test",
    # lerna 打包构建
    "build": "lerna run build --stream",
    # 启动 VuePress 在开发模式下运行文档站点
    "docs:dev": "vuepress dev docs",
    # 使用 VuePress 对文档进行构建操作
    "docs:build": "vuepress build docs",
    # 通过执行 “deploy.sh” 脚本 执行自动化部署
    "deploy": "bash deploy.sh",
    # lerna 包发布命令(可以选择只发布部分包或者全部包)
    "publish": "lerna publish",
    # markdownlint 初始化
    "lint": "markdownlint README.md",
    # 自动生成变更日志
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s"
```

### 其他命令使用

```bash
    # 创建新的包
    lerna create 包名字
    # 根据markdownlint配置 对某个md文档执行检查
    markdownlint XXX.md
```

</br>
