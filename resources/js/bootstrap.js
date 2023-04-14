// import _ from 'lodash';
// window._ = _;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from "axios";
window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
    faArrowRightArrowLeft,
    faChevronDown,
    faChevronRight,
    faPlus,
    faLanguage,
    faCircleNodes,
    faSitemap,
    faPercent,
    faEquals,
    faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faGithub, faLinkedin);
library.add(
    faArrowRightArrowLeft,
    faChevronDown,
    faPlus,
    faLanguage,
    faCircleNodes,
    faSitemap,
    faPercent,
    faEquals,
    faChevronRight,
    faCircleInfo
);
