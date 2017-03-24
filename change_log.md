# Change Log

## [v1.1.0-alpha.2](https://github.com/thewizardplusplus/vk-group-stats/tree/v1.1.0-alpha.2) (2017-03-24)

**Closed issues:**

- Display new group fields in the client if they are available [\#20](https://github.com/thewizardplusplus/vk-group-stats/issues/20)
- Support a group update on a counter addition in the client [\#19](https://github.com/thewizardplusplus/vk-group-stats/issues/19)
- Support a counter addition on a group addition in the client [\#18](https://github.com/thewizardplusplus/vk-group-stats/issues/18)
- Support a group URL as a group screen name [\#17](https://github.com/thewizardplusplus/vk-group-stats/issues/17)
- Save new group fields and add a counter on a group addition [\#16](https://github.com/thewizardplusplus/vk-group-stats/issues/16)
- Update new group fields on a counter addition [\#15](https://github.com/thewizardplusplus/vk-group-stats/issues/15)
- Extend the group model: add a name and a photo [\#14](https://github.com/thewizardplusplus/vk-group-stats/issues/14)

## [v1.1.0-alpha](https://github.com/thewizardplusplus/vk-group-stats/tree/v1.1.0-alpha) (2017-03-19)

**Closed issues:**

- Restore a support of the VK\_GROUP\_STATS\_SESSION\_SECRET environment variable [\#13](https://github.com/thewizardplusplus/vk-group-stats/issues/13)
- Generate a VK app redirect URI independently of a server port [\#10](https://github.com/thewizardplusplus/vk-group-stats/issues/10)
- Read a server port from the PORT environment variable too [\#9](https://github.com/thewizardplusplus/vk-group-stats/issues/9)
- Read a MongoDB connection URI from the MONGODB\_URI environment variable too [\#8](https://github.com/thewizardplusplus/vk-group-stats/issues/8)
- Correct a caching of builds on Heroku [\#6](https://github.com/thewizardplusplus/vk-group-stats/issues/6)
- Simplify and unify a starting [\#5](https://github.com/thewizardplusplus/vk-group-stats/issues/5)
- Build after an installing on Heroku [\#4](https://github.com/thewizardplusplus/vk-group-stats/issues/4)
- Simplify and unify an installing [\#3](https://github.com/thewizardplusplus/vk-group-stats/issues/3)
- Move build dependencies to production dependencies [\#2](https://github.com/thewizardplusplus/vk-group-stats/issues/2)
- Specify a required Node.js version [\#1](https://github.com/thewizardplusplus/vk-group-stats/issues/1)

**Fixed bugs:**

- Correct exit codes on errors [\#7](https://github.com/thewizardplusplus/vk-group-stats/issues/7)

## [v1.0.0](https://github.com/thewizardplusplus/vk-group-stats/tree/v1.0.0) (2017-03-12)

- back-end:
    - security:
        - improve a security by setting various HTTP headers via the [Helmet](https://github.com/helmetjs/helmet) package;
        - use a generic session name;
    - environment variables:
        - update environment variables from a `.env` file;
        - check required environment variables;
        - replace a MongoDB host/port pair to a MongoDB connection URI;
        - remove session settings;
        - generate a VK app redirect URI automatically;
- front-end:
    - add an authentication process to the UI;
    - add a group list refreshing;
    - add an about app dialog;
    - themes:
        - set an app background color from an app theme;
        - move counters deltas colors to an app theme;
        - support a light theme;
        - support a theme selection via an environment variable;
    - fix the bug with a cookies sending via Fetch API.

## [v1.0.0-alpha.3](https://github.com/thewizardplusplus/vk-group-stats/tree/v1.0.0-alpha.3) (2017-03-10)

- back-end:
    - remove the `DELETE /groups/{group_id}/counters` route;
- front-end:
    - use the ESLint utility;
    - add a group counters displaying;
    - add a group counter adding;
    - add an adding of counters for all groups simultaneously.

## [v1.0.0-alpha.2](https://github.com/thewizardplusplus/vk-group-stats/tree/v1.0.0-alpha.2) (2017-03-09)

- correct npm scripts:
    - add an installation;
    - add a client building;
    - add a hot reloading:
        - for the server;
        - for the client;
- back-end:
    - change a default server port to 4000;
    - correct routes:
        - add the `/users/me` route;
        - remove the `/login` route;
    - support a skipping of an authentication;
- front-end:
    - use Redux DevTools;
    - add a group list displaying;
    - add a group adding;
    - add a group removing.

## [v1.0.0-alpha](https://github.com/thewizardplusplus/vk-group-stats/tree/v1.0.0-alpha) (2017-02-19)
