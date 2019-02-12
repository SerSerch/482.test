import './Projects.scss';

import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';

import {Container, Item} from 'components/Content';

import DefaultProjectImg from './img/project.png';

class Projects extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { getAllProjects } = this.props;
        getAllProjects();
        //getAllUsers();
    }

    addDefaultSrc = (e) => {
        e.target.src = DefaultProjectImg;
    };

    render() {
        const { projects } = this.props;

        return (
            <Container box>
                <Item noSpace container>
                    {
                        projects.length && projects.map((item, index) => {
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
                                    <div>лайк {item.likes} / диз {item.dislikes}</div>
                                </Item>
                            )
                        })
                    }
                </Item>
            </Container>
        );
    }
}

export default Projects;