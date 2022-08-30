document.addEventListener('DOMContentLoaded', () => {

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
            sandwich.classList.remove('active');
            menu.classList.add('d-none');
        })
    })

    //Слушатель для модалки
    document.querySelectorAll('.block-project ').forEach(item => {
        item.querySelector('.btn-outline').addEventListener('click', () => {
            //Фон за модалкой
            let bgModal = document.createElement('div');
            bgModal.classList.add('modal-bg');
            document.body.prepend(bgModal);

            let wrap, container, content, body, btnClose;
            wrap = document.createElement('div');
            wrap.classList.add('modal-wrap');
            container = document.createElement('div');
            container.classList.add('modal-container');
            content = document.createElement('div');
            content.classList.add('modal-content');
            body = document.createElement('div');
            body.classList.add('modal-body');
            btnClose = document.createElement('button');
            btnClose.classList.add('btn-close');

            body.append(btnClose);
            content.append(body);
            container.append(content);
            wrap.append(container);

            bgModal.after(wrap)

            btnClose.addEventListener('click', () => {
              bgModal.remove();
              wrap.remove();  
            })

        })
    })
})