export default class Project {
    projects = [
        {
            id: 'first-project',
            name: 'Газопровод межпоселковый',
            desc: '',
            place: 'с.Серга- с.Насадка Кунгурского района Пермскогокрая',
            width: '14433 метров',
            img: '../../static/img/first.jpg',
        },
        {
            id: 'second-project',
            name: 'Газификация жилого фонда',
            desc: '',
            place: 'с.Черная-2',
            width: '8250 метров',
            img: '../../static/img/second.jpg',
        },
        {
            id: 'third-project',
            name: 'Газопровод высокого давления',
            desc: '',
            place: 'Соликамский городской округ',
            width: '61 метров',
            img: '../../static/img/third.jpg',
        },
        {
            id: 'fourth-project',
            name: 'Распределительный газопровод',
            desc: '',
            place: 'д.Большая Мось Фроловского сельского поселения',
            width: '14433 метров',
            img: '../../static/img/fourth.jpg',
        }
    ];

    getProjects() {
        return this.projects;
    }
    getProjectById(id) {
        let prj;
        this.projects.forEach(item => {
            if (id === item.id) {
                prj = item;
            }
        });
        return prj;
    }
}