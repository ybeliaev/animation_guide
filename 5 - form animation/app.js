const containers = document.querySelectorAll(".input-container");
const form = document.querySelector("form");

const tl = gsap.timeline({defaults: {duration: 1}});

//Line
const start =
    "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";
const end =
    "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";

//Elastic Effect
containers.forEach((container) => {
    const input = container.querySelector(".input");
    const line = container.querySelector(".elastic-line");
    const placeholder = container.querySelector(".placeholder");

    input.addEventListener("focus", () => {
        //Check to see if there is any text in the input
        if (!input.value) {
            tl.fromTo(
                line,
                {attr: {d: start}},
                {attr: {d: end}, ease: "Power2.easeOut", duration: 0.75}
            );
            tl.to(line, {attr: {d: start}, ease: "elastic.out(3,0.5)"}, "<50%");
            //Placeholder Shift
            tl.to(
                placeholder,
                {
                    top: -15,
                    left: 0,
                    scale: 0.7,
                    duration: 0.5,
                    ease: "Power2.easeOut",
                },
                "<15%"
            );
        }
    });
});

//Revert back if it's not focused
form.addEventListener("click", () => {
    containers.forEach((container) => {
        const input = container.querySelector(".input");
        const line = container.querySelector(".elastic-line");
        const placeholder = container.querySelector(".placeholder");

        if (document.activeElement !== input) {
            if (!input.value) {
                gsap.to(placeholder, {
                    top: 0,
                    left: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: "Power2.easeOut",
                });
            }
        }
        //We will do our validation
        //Name Validation
        input.addEventListener("input", (e) => {
            if (e.target.type === "text") {
                let inputText = e.target.value;
                if (inputText.length > 2) {
                    colorize("#6391E8", line, placeholder);
                } else {
                    colorize("#FE8C99", line, placeholder);
                }
            }
            //Validate Email
            if (e.target.type === "email") {
                let valid = validateEmail(e.target.value);
                if (valid) {
                    colorize("#6391E8", line, placeholder);
                } else {
                    colorize("#FE8C99", line, placeholder);
                }
            }
            //Validate Phone
            if (e.target.type === "tel") {
                let valid = validatePhone(e.target.value);
                if (valid) {
                    colorize("#6391E8", line, placeholder);
                } else {
                    colorize("#FE8C99", line, placeholder);
                }
            }
        });
    });
});

// checking email validation

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
    let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(phone);
}

//COLORIZE FUNCTION
function colorize(color, line, placeholder) {
    gsap.to(line, {stroke: color, duration: 0.75});
    gsap.to(placeholder, {color: color, duration: 0.75});
}

//Checkbox animation fill
const checkbox = document.querySelector(".checkbox");

const tl2 = gsap.timeline({
    defaults: { duration: 0.5, ease: "Power2.easeOut" },
});
const tickMarkPath = document.querySelector(".tick-mark path");
const pathLength = tickMarkPath.getTotalLength();
gsap.set(tickMarkPath, {
    strokeDashoffset: pathLength,
    strokeDasharray: pathLength,
});