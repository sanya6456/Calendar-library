export const checkWindowResize = (calendarInstance) => {
    let watcher = (bp) => {
        if (bp.matches) {
            calendarInstance.monthView()
            calendarInstance.updateOnChange();
        } else {
            calendarInstance.listView()
            calendarInstance.updateOnChange();
            calendarInstance.el.querySelector(".list-wrapper .btn").remove(); // Remove "back to month view" button on small screen
        }
    };

    let bp = window.matchMedia("(min-width: 550px)");
    bp.addListener(watcher);

    return watcher;
};
