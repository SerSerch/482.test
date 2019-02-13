import './MyProjects.scss';

import React, { PureComponent, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

import {Container, Item} from 'components/Content';
import Dialog from 'components/Dialog';

import DefaultProjectImg from './img/project.png';

class MyProjects extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            //userId: 1,
            openDialog: false,
            name: 'Проект',
            detailed: 'Описание проекта'
        };
    }

    handleDialog = (e) => {
        const {projects} = this.props;
        const id = e.currentTarget.dataset.name;
        const thisProject = [...projects].filter(item => item.id == id)[0];
        this.setState({
            openDialog: !this.state.openDialog,
            name: thisProject.name,
            detailed: thisProject.detailed,
        });
    };

    closeDialog = () => {
        this.setState({
            openDialog: !this.state.openDialog,
        });
    };

    componentDidMount() {
        const { getAllProjects } = this.props;
        const params = [
            '_limit=12',
            'autor=1'
        ];
        getAllProjects(params);
    }

    addDefaultSrc = (e) => {
        e.target.src = DefaultProjectImg;
    };

    createProject = () => {
        const { createProject } = this.props;

        //test object
        const project = {
            "autor": 1,
            "name": "Мой проект 10",
            "img": "/img/project10.jpg",
            "description": "Интернет магазин",
            "detailed": "Швейцарские часы с доставкой в Одессу",
            "likes": 0,
            "dislikes": 0,
            "date": new Date().toISOString()
        };
        createProject(project);
    };

    render() {
        const { projects } = this.props;

        return (
            <Fragment>
                <Container box>
                    {
                        (Array.isArray(projects)) && projects.map((item, index) => {
                            const [YY, MM, DD] = item.date.split('T')[0].split('-');
                            const thisAutor = !this.state.userId || this.state.userId == item.autor;

                            return(
                                <Item key={index} xs={12} sm={6} lg={4} xl={3}>
                                    <div data-name={item.id} onClick={this.handleDialog}>
                                        <Typography variant="h4">
                                            {item.name}
                                        </Typography>
                                        <img src={item.img} onError={this.addDefaultSrc} alt={item.name}/>
                                        <Typography>
                                            {item.description}
                                        </Typography>
                                        <Typography>
                                            Автор: {item.autor}
                                        </Typography>
                                        <Typography>
                                            Дата: {`${DD}-${MM}-${YY}`}
                                        </Typography>
                                    </div>
                                </Item>
                            )
                        })
                    }
                </Container>
                <Dialog
                    name={this.state.name}
                    detailed={this.state.detailed}
                    openDialog={this.state.openDialog}
                    handleDialog={this.handleDialog}
                    closeDialog={this.closeDialog}
                />
            </Fragment>
        );
    }
}

export default MyProjects;