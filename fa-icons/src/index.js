import { library, dom } from "@fortawesome/fontawesome-svg-core";

// Import solid weight icons
import {
  faCaretDown as fasCaretDown,
  faSearch as fasSearch,
} from "@fortawesome/free-solid-svg-icons";

// Import regular weight icons
import {
  faUser as farUser,
  faUserCircle as farUserCircle,
} from "@fortawesome/free-regular-svg-icons";

// Import brand icons
import {
  faFacebookF as fabFacebookF,
  faTwitter as fabTwitter,
  faInstagram as fabInstagram,
  faYoutube as fabYoutube,
  faLinkedin as fabLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// Add icons to library
library.add(
  // Solid
  fasCaretDown,
  fasSearch,

  // Regular
  farUser,
  farUserCircle,

  // Brands
  fabFacebookF,
  fabTwitter,
  fabInstagram,
  fabYoutube,
  fabLinkedin
);

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();
