module.exports = function(browserView, browserWindow, settings){
    // Get the bounds and calculate starting position as a percentage of the view
    let viewBounds = browserView.getBounds();
    let windowBounds = browserWindow.getBounds();
    let initialHeight = viewBounds.height / windowBounds.height;
    let initialWidth = viewBounds.width / windowBounds.width;

    // Listen to resize event
    browserWindow.on('resize', () => {
        let bounds = browserWindow.getBounds();
        let newBounds = Object.assign({}, browserView.getBounds());

        // Resize view depending on settings
        if(settings.width === true){
            newBounds.width = Math.floor(bounds.width * initialWidth);
        }
        if(settings.height === true){
            newBounds.height = Math.floor(bounds.height * initialHeight);
        }

        browserView.setBounds(newBounds);
    });
}
