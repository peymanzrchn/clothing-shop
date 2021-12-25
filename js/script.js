const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    setTimeout(() => {
        counter.textContent = "0";

        const updateCounter = () => {
            const target = Number(counter.getAttribute("data-target"));
            const count = Number(counter.textContent);

            const increment = target / 1000;

            if (count < target) {
                counter.textContent = Math.ceil(count + increment);
                setTimeout(updateCounter, 15);
            } else {
                counter.textContent = target;
            }
        };
        updateCounter();
    }, 2000);
});
