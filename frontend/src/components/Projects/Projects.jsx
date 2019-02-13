import './Projects.scss';

import React, { PureComponent, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {Container, Item} from 'components/Content';
import {Likes, Dislikes} from 'components/Likes';
import Dialog from 'components/Dialog';

import DefaultProjectImg from './img/project.png';

class Projects extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
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
            '_sort=likes',
            '_order=desc',
            '_limit=12'
        ];
        getAllProjects(params);
    }

    addDefaultSrc = (e) => {
        e.target.src = DefaultProjectImg;
    };

    // createProject = () => {
    //     const { createProject } = this.props;
    //
    //     //test object
    //     const obj = {
    //         "autor": 1,
    //         "name": "Мой проект 10",
    //         "img": "/img/project10.jpg",
    //         "description": "Интернет магазин",
    //         "detailed": "Швейцарские часы с доставкой в Одессу",
    //         "likes": 0,
    //         "dislikes": 0,
    //         "date": new Date().toISOString()
    //     };
    //     createProject(obj);
    // };

    likesProject = (e) => {
        const { projects, editProject } = this.props;
        const id = e.currentTarget.name;
        const thisProject = projects.filter(item => item.id == id)[0];

        editProject(id, {
            ...thisProject,
            likes: thisProject.likes + 1,
        });
    };

    dislikesProject = (e) => {
        const { projects, editProject } = this.props;
        const id = e.currentTarget.name;
        const thisProject = projects.filter(item => item.id == id)[0];

        editProject(id, {
            ...thisProject,
            dislikes: thisProject.dislikes + 1,
        });
    };

    render() {
        const { projects } = this.props;

        return (
            <Fragment>
                <Container box>
                    {
                        (Array.isArray(projects)) && projects.map((item, index) => {
                            const [YY, MM, DD] = item.date.split('T')[0].split('-');
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
                                    <div>
                                        {item.likes}
                                        <Likes
                                            id={item.id}
                                            onClick={this.likesProject}
                                        />
                                        <Dislikes
                                            id={item.id}
                                            onClick={this.dislikesProject}
                                        />
                                        {item.dislikes}
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

export default Projects;