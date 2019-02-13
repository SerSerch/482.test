import './MyProjects.scss';

import React, { PureComponent, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {Container, Item} from 'components/Content';
import Dialog from 'components/Dialog';

import {handleInputChange} from "efi/handleChange";

import DefaultProjectImg from './img/project.png';

class MyProjects extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            //userId: 1,
            userName: '',
            openDialog: false,
            name: 'Проект',
            detailed: 'Описание проекта'
        };
    }

    handleChange = (e) => {
        handleInputChange.call(this, e);
    };

    handleDialog = (e) => {
        const {myProjects} = this.props;
        const id = e.currentTarget.dataset.name;
        const thisProject = [...myProjects].filter(item => item.id == id)[0];
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
        const {user, userSignAuth, getMyProjects} = this.props;
        if(!user.id) {
            userSignAuth();
        } else {
            const params = [
                '_limit=12',
                'autor='+user.id
            ];
            getMyProjects(params);
        }
    }

    componentDidUpdate() {
        const {user, myProjects, getMyProjects} = this.props;

        if(user.id && (!myProjects || !myProjects[0])) {
            const params = [
                '_limit=12',
                'autor='+user.id
            ];
            getMyProjects(params);
        }
    }

    addDefaultSrc = (e) => {
        e.target.src = DefaultProjectImg;
    };

    createProj = () => {
        const { createProject, user } = this.props;

        //test object
        const project = {
            "autor": user.id,
            "name": "Мой проект 10",
            "img": "/img/project1.jpg",
            "description": "Интернет магазин",
            "detailed": "Швейцарские часы с доставкой в Одессу",
            "likes": 0,
            "dislikes": 0,
            "date": new Date().toISOString()
        };
        createProject(project);
    };

    getUser = () => {
        const {getUser} = this.props;
        const params = [
            'login='+this.state.userName
        ];
        getUser(params);
    };

    createUser = () => {
        if (this.state.userName.length >= 4) {
            const {createUser} = this.props;
            const user = {
                "login": this.state.userName,
                "likes": {}
            };
            createUser(user);
        }
    };

    userSignOut = () => {
        const {userSignOut, getMyProjects} = this.props;
        const params = [
            'autor=0'
        ];
        userSignOut();
        getMyProjects(params);
    };

    editProject = (e) => {
        const {editMyProject, myProjects} = this.props;
        const id = e.currentTarget.name;
        const thisProject = myProjects.filter(item => item.id == id)[0];

        editMyProject(id, {
            ...thisProject,
            name: 'Проект '+Math.floor(Math.random()*100),
        });
    };

    deleteProject = (e) => {
        const {deleteProject} = this.props;
        deleteProject(e.currentTarget.name);
    };

    render() {
        const { myProjects, user } = this.props;

        return (
            <Fragment>
                <Container box>
                    {
                        (Array.isArray(myProjects) && user.id) && myProjects.map((item, index) => {
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
                                            Автор: {user.login}
                                        </Typography>
                                        <Typography>
                                            Дата: {`${DD}-${MM}-${YY}`}
                                        </Typography>
                                    </div>
                                    <Button name={item.id} onClick={this.deleteProject} variant="contained">Delete</Button>
                                    <Button name={item.id} onClick={this.editProject} variant="contained">Edit</Button>
                                </Item>
                            )
                        })
                    }
                </Container>
                <Container box>
                    <Item>
                        {!user.id ?
                            <Fragment>
                                <TextField
                                    id="login-input"
                                    label="Login"
                                    name="userName"
                                    className="textField"
                                    value={this.state.userName}
                                    onChange={this.handleChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <Button onClick={this.getUser} variant="contained">Login</Button>
                                <Button onClick={this.createUser} variant="contained">Logup</Button>
                            </Fragment>
                            :
                            <Fragment>
                                <Button onClick={this.userSignOut} variant="contained">Logout</Button>
                                <Button onClick={this.createProj} variant="contained">createProject</Button>
                            </Fragment>
                        }
                    </Item>
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