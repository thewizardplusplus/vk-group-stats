# Change Log

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
