//Ukiyo

const head = document.querySelector('.header');

new Ukiyo(head, {
    scale: 1.25,
    speed: 2,
});

// fade effect
const faders = document.querySelectorAll('.fade-in');

const scroller = new IntersectionObserver( entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting)
            if (entry.isIntersecting) scroller.unobserve(entry.target)
        })
    },
    {
        threshold: 0.9,
    }
)

faders.forEach(fade => {
    scroller.observe(fade);
})

const faders2 = document.querySelectorAll('.fade-in-2');

const scroller2 = new IntersectionObserver( entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show-2', entry.isIntersecting)
            if (entry.isIntersecting) scroller2.unobserve(entry.target)
        })
    },
    {
        threshold: 0.9,
    }
)

faders2.forEach(fade2 => {
    scroller2.observe(fade2);
})

const faders3 = document.querySelectorAll('.fade-in-3');

const scroller3 = new IntersectionObserver( entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show-3', entry.isIntersecting)
            if (entry.isIntersecting) scroller3.unobserve(entry.target)
        })
    },
    {
        threshold: 0.9,
    }
)

faders3.forEach(fade3 => {
    scroller3.observe(fade3);
})
