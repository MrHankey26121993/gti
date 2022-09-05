import Projects from './data.js';
document.addEventListener('DOMContentLoaded', () => {
    let btnSLider = document.querySelector('.btn-slider');
    //Создание блоков с проектами
    let rowProject = document.querySelector('.project').querySelector('.row');
    //  let rowProject = document.querySelector('.project-test').querySelector('.row');
    let modelProjects = new Projects();

    modelProjects.getProjects().forEach(project => {

        let col = document.createElement('div');
        col.classList.add('col-12', 'col-md-3', 'animated', 'animated-left-mob');
        rowProject.append(col);
        let blockProject = `<div id="${project.id}" class="block-project">
                                <div class="block-project-text">
                                    <span class="project-name">${project.name}</span>
                                    <span class="projec-place">${project.place}</span>
                                    <span class="project-width">${project.width}</span>
                                </div>
                            </div>`;

        col.innerHTML = blockProject;

    });

    let bodyWidth = document.querySelector('body').clientWidth;

    const observer = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
            // если элемент появился
            if (entry.isIntersecting) {
                // добавить ему CSS-класс
                if (entry.target.classList.contains('main-animated')) {
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.add('fadeInDownBig');
                }
                if (bodyWidth > 600) {
                    if (entry.target.classList.contains('animated-left')) {
                        entry.target.classList.remove('opacity-0');
                        entry.target.classList.add('fadeInLeft');
                    }
                    if (entry.target.classList.contains('animated-right')) {
                        entry.target.classList.add('fadeInRight');
                        entry.target.classList.remove('opacity-0');
                    }
                    if (entry.target.classList.contains('team-animated-teamated')) {
                        entry.target.classList.add('fadeInLeft');
                        entry.target.classList.remove('opacity-0');
                    }
                } else {
                    if (entry.target.classList.contains('animated-right-mob')) {
                        entry.target.classList.add('fadeInRight');
                        entry.target.classList.remove('opacity-0');
                    }
                    if (entry.target.classList.contains('animated-left-mob')) {
                        entry.target.classList.remove('opacity-0');
                        entry.target.classList.add('fadeInLeft');
                    }
                }

                if (entry.target.classList.contains('animated-title')) {
                    entry.target.classList.add('fadeInDown');
                    entry.target.classList.remove('opacity-0');
                }
                if (entry.target.classList.contains('service-animated-list')) {
                    entry.target.classList.add('fadeInLeft');
                    entry.target.classList.remove('opacity-0');
                }



            } else {
                if (entry.target.classList.contains('main-animated')) {
                    entry.target.classList.add('opacity-0');
                }
                if (bodyWidth > 600) {
                    if (entry.target.classList.contains('animated-left')) {
                        entry.target.classList.add('opacity-0');
                        entry.target.classList.remove('fadeInLeft');
                    }
                    if (entry.target.classList.contains('animated-right')) {
                        entry.target.classList.add('opacity-0');
                        entry.target.classList.remove('fadeInRight');
                    }
                    if (entry.target.classList.contains('team-animated-teamated')) {
                        entry.target.classList.remove('fadeInLeft');
                        entry.target.classList.add('opacity-0');
                    }
                } else {
                    if (entry.target.classList.contains('animated-right-mob')) {
                        entry.target.classList.add('opacity-0');
                        entry.target.classList.remove('fadeInRight');
                    }
                    if (entry.target.classList.contains('animated-left-mob')) {
                        entry.target.classList.add('opacity-0');
                        entry.target.classList.remove('fadeInLeft');
                    }
                }

                if (entry.target.classList.contains('animated-title')) {
                    entry.target.classList.remove('fadeInDown');
                    entry.target.classList.add('opacity-0');
                }
                if (entry.target.classList.contains('service-animated-list')) {
                    entry.target.classList.remove('fadeInLeft');
                    entry.target.classList.add('opacity-0');
                }



            }
        });
    });
    document.querySelectorAll('.animated').forEach(item => {
        observer.observe(item);
    })

    let blockTeamated = document.querySelectorAll('.teamated');
    let widthMain = null,
        heightMain = null;
    blockTeamated.forEach(item => {
        if (!widthMain) {
            widthMain = item.clientWidth;
            heightMain = widthMain;
        }
        item.style.width = widthMain + 'px';
        item.style.height = widthMain + 'px';
        let ava = item.querySelector('.teamated-ava');
        ava.style.position = 'absolute';
        let avaWidth = widthMain - (widthMain / 100 * 50)
        ava.style.width = avaWidth + 'px'; //Ширина 50% от общей ширины элемента
        ava.style.height = ava.style.width;
        ava.style.borderRadius = '50%';
        ava.style.backgroundImage = `url(../../static/img/${item.id}.jpg)`;
        ava.style.backgroundSize = 'cover';
        ava.style.backgroundPosition = 'center';
        ava.style.left = (widthMain - avaWidth) / 2 + 'px';
        ava.style.top = '-' + (avaWidth / 2) + 'px';
        item.style.marginTop = (avaWidth / 2) + 'px';
        let info = item.querySelector('.teamated-info');
        info.style.paddingTop = (avaWidth / 2) + 'px';

        if (document.querySelector('body').clientWidth < 600) {
            item.style.height = 'auto';
            console.log('fsdfasdf')
            let avaWidthMob = item.clientWidth - (item.clientWidth / 100 * 60);
            ava.style.width = avaWidthMob + 'px';
            ava.style.height = ava.style.width;
            ava.style.left = (item.clientWidth - avaWidthMob) / 2 + 'px';
            ava.style.top = '-' + (avaWidthMob / 2) + 'px';
        }

    })

    let sandwich = document.querySelector('.sandwich');
    let menu = document.querySelector('.menu-mob');
    //Создание меня для мобилки
    document.querySelector('.navbar-toggler-custom').addEventListener('click', () => {
        if (sandwich.classList.contains('active')) {
            sandwich.classList.remove('active')
            menu.classList.add('d-none');
        } else {
            sandwich.classList.add('active')
            menu.classList.remove('d-none');
        }
    });

    //Слушатель для сылку в меня для мобилок
    menu.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('not-link')) {
                btnSLider.click();
            }
            sandwich.classList.remove('active');
            menu.classList.add('d-none');
        })
    })


    document.querySelectorAll('.btn-slider').forEach(item => {
        item.addEventListener('click', () => {
            //Фон за модалкой
            let bgModal = document.createElement('div');
            bgModal.classList.add('modal-bg');
            document.body.prepend(bgModal);

            bgModal.innerHTML = `<div class="slider">
                                    <div class="slider-close">X</div>
                                    <div class="slider__wrapper">
                                        <div class="slider__items">
                                            <div class="slider__item">
                                                <div>
                                                    <img src="static/img/lic1.jpg" alt="">
                                                </div>
                                            </div>
                                            <div class="slider__item">
                                                <div>
                                                    <img src="static/img/lic2.jpg" alt="">
                                                </div>
                                            </div>
                                            <div class="slider__item">
                                                <div>
                                                    <img src="static/img/lic3.jpg" alt="">
                                                </div>
                                            </div>
                                            <div class="slider__item">
                                                <div>
                                                    <img src="static/img/lic4.jpg" alt="">
                                                </div>
                                            </div>
                                            <div class="slider__item">
                                                <div>
                                                    <img src="static/img/lic5.jpg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Кнопки для перехода к предыдущему и следующему слайду -->
                                    <button class="slider__control" data-slide="prev"></button>
                                    <button class="slider__control" data-slide="next"></button>
                                </div>`;

            bgModal.querySelector('.slider-close').addEventListener('click', () => {
                bgModal.remove()
            })

            new ItcSlider('.slider');


        });
    })

    document.addEventListener('scroll', () => {
        checkScroll();
    })

    checkScroll();

    document.querySelector('.arrow-top').addEventListener('click', () => {
        document.body.scrollIntoView();
    });


})

function checkScroll() {
    let btn = document.querySelector('.arrow-top');
    if (window.pageYOffset > 95) {
        if (btn.classList.contains('d-none')) {
            btn.classList.remove('d-none');
        }
    } else {
        if (!btn.classList.contains('d-none')) {
            btn.classList.add('d-none');
        }
    }
}