const reactpreview = require("@reactpreview/config");

module.exports = reactpreview.config({
	publicDir: "public",
	exclude: ["build/**", "public/**", "node_modules/**", "node_modules.nosync/**"],
	svgr: {
		componentName: "default"
	},
});

// https://reactpreview.com/docs
