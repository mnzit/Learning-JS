function $(key) {

    var objects;

    if (typeof key === 'string' || key instanceof String) {
        objects = document.querySelectorAll(key);
    } else {
        objects = key;
    }

    this.css = (attribute, value) => {
        if (value != undefined) {
            if (NodeList.prototype.isPrototypeOf(objects)) {
                objects.forEach((object, index) => {
                    object.style[attribute] = value;
                });
            } else {
                objects.style[attribute] = value;
            }
        }
        return this;
    };

    this.fadeOut = (interval) => {
        if (NodeList.prototype.isPrototypeOf(objects)) {
            objects.forEach((object, index) => {
                object.style.transition = "opacity "+interval+"ms";
                object.style.opacity = 0;
                setInterval(() => objects.style.display = "none", interval);
            });
        } else {
            objects.style.transition = "opacity "+interval+"ms";
            objects.style.opacity = 0;
            setInterval(() => objects.style.display = "none", interval);
        }
    };

    this.on = (event, callBack) => {
        objects.forEach((object, index) => {
            object.addEventListener(event, callBack);
        });
        return this;
    };

    return this;
}

$("ul li").css("color", "red")
    .on('mouseover', (e) => {
        $(e.target).css("color", "blue");
    }).on('mouseout', (e) => {
        $(e.target).css("color", "red");
    }).on("click", (e) => {
        $(e.target).fadeOut(700);
    });