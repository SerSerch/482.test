import './Projects.scss';

import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';

import {Container, Item} from 'components/Content';
import {Likes, Dislikes} from 'components/Likes';

import DefaultProjectImg from './img/project.png';

class Projects extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { getAllProjects, createProject } = this.props;
        getAllProjects();
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
    //         "img": "/img/prject10.jpg",
    //         "description": "Интернет магазин",
    //         "detailed": "Швейцарские часы с доставкой в Одессу",
    //         "likes": 0,
    //         "dislikes": 0,
    //         "date": new Date().toISOString()
    //     };
    //     createProject(obj);
    // };

    likesProject = (id) => {
        const { projects, editProject } = this.props;
        const thisProject = projects.filter(item => item.id == id)[0];

        editProject(id, {
            ...thisProject,
            likes: thisProject.likes + 1,
        });
    };

    dislikesProject = (id) => {
        const { projects, editProject } = this.props;
        const thisProject = projects.filter(item => item.id == id)[0];

        editProject(id, {
            ...thisProject,
            dislikes: thisProject.dislikes + 1,
        });
    };

    render() {
        const { projects } = this.props;

        return (
            <Container box>
                {
                    (Array.isArray(projects)) && projects.map((item, index) => {
                        const [YY, MM, DD] = item.date.split('T')[0].split('-');
                        return(
                            <Item key={index} xs={12} sm={6} lg={4} xl={3}>
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
                                <div>
                                    <Likes
                                        id={item.id}
                                        quantity={item.likes}
                                        onClick={this.likesProject}
                                    />
                                    <Dislikes
                                        id={item.id}
                                        quantity={item.dislikes}
                                        onClick={this.dislikesProject}
                                    />
                                </div>
                            </Item>
                        )
                    })
                }
            </Container>
        );
    }
}

export default Projects;