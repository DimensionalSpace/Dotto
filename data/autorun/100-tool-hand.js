app.addTool("hand")

function onEvent(name) {
    var target = app.target;
    switch (name) {
    case "init":
        // nothing to do
        break;
    case "toolstart":
        app.window.findChildById("editor").set("draggable", true);
        break;
    case "toolend":
    case "tooldeactivate":
        app.window.findChildById("editor").set("draggable", false);
        break;
    }
}