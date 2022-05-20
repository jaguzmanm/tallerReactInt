import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

const locale = navigator.language;
let lang;
let theme;
if (locale.startsWith("es")) {
  lang = localeEsMessages;
  theme = "light";
} else {
  lang = localeEnMessages;
  theme = "dark";
}

ReactDOM.render(
  <IntlProvider locale={locale} messages={lang}>
    <JobsList theme={theme} />
  </IntlProvider>,
  document.getElementById("root")
);
