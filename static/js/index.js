document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
            // если элемент появился
            if (entry.isIntersecting) {
                // добавить ему CSS-класс
                if(entry.target.classList.contains('main-animated')) {
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.add('fadeInDownBig');
                }
                if(entry.target.classList.contains('about-animated-left')) {
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.add('fadeInLeft');
                }
                if(entry.target.classList.contains('about-animated-right')) {
                    entry.target.classList.add('fadeInRight');
                    entry.target.classList.remove('opacity-0');
                }
                if(entry.target.classList.contains('service-animated-title')) {
                    entry.target.classList.add('fadeInRight');
                    entry.target.classList.remove('opacity-0');
                }
                if(entry.target.classList.contains('service-animated-list')) {
                    entry.target.classList.add('fadeInLeft');
                    entry.target.classList.remove('opacity-0');
                }
                if(entry.target.classList.contains('team-animated-title')) {
                    entry.target.classList.add('fadeInRight');
                    entry.target.classList.remove('opacity-0');
                }
                if(entry.target.classList.contains('team-animated-teamated')) {
                    entry.target.classList.add('fadeInLeft');
                    entry.target.classList.remove('opacity-0');
                }
                
                
            } else {
                if(entry.target.classList.contains('main-animated')) {
                    entry.target.classList.add('opacity-0');
              //      entry.target.classList.remove('fadeInDownBig');
                }
                if(entry.target.classList.contains('about-animated-left')) {
                    entry.target.classList.add('opacity-0');
                    entry.target.classList.remove('fadeInLeft');
                }
                if(entry.target.classList.contains('about-animated-right')) {
                    entry.target.classList.add('opacity-0');
                    entry.target.classList.remove('fadeInRight');
                }
                if(entry.target.classList.contains('service-animated-title')) {
                    entry.target.classList.remove('fadeInRight');
                    entry.target.classList.add('opacity-0');
                }
                if(entry.target.classList.contains('service-animated-list')) {
                    entry.target.classList.remove('fadeInLeft');
                    entry.target.classList.add('opacity-0');
                }


            }
        });
    });
    document.querySelectorAll('.animated').forEach(item => {
        observer.observe(item);

    })




    //  $('.main-data').animated('fadeInDownBig', 'fadeInUpBig')
    $('.scop-top').animated('fadeInLeftBig', 'fadeInRightBig')
    $('.scop-bottom').animated('fadeInRightBig', 'fadeInLeftBig')
    //    scop - top
})