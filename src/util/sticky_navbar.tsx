
function updateStickyNavbar(y_offset: number, navbar_offset: number | undefined) {
    if(navbar_offset) {
        const navbar = document.getElementById("tabs");
        if (y_offset >= navbar_offset) { 
            navbar?.classList.add("sticky");
        } else {
            navbar?.classList.remove("sticky");
        }
    }
}

export {updateStickyNavbar};