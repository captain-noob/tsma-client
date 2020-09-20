var en = require("../localization/_en.json")
//var it = require('../localization/_it.json');

import LocalizedStrings from "react-localization"
let localeString = new LocalizedStrings({
    en,
    //it
})

localeString.setLanguage("en")

export default localeString
