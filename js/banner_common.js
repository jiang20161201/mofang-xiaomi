function animate(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function() {
        var step = 8;
        var current = element.offsetLeft;
        step = current < target ? step : -step;
        if (Math.abs(target - current) <= Math.abs(step)) {
            clearInterval(element.timeId);
            element.style.left = target + "px";
        } else {
            current = current + step;
            element.style.left = current + "px";
        }
    }, 10);
}
