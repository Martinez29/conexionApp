import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text, Button, Item, Input, Icon } from 'native-base';
import { StyleSheet, Alert } from 'react-native';
import api from '../data/api';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            pass: ''
        }
    }

    login = async () => {
        let validarLog = await api.validarLog(this.state.username, this.state.pass)
        
        if(validarLog.status == 1){
            this.props.navigation.navigate('Principal');
        }else{
            Alert.alert('Usuario o clave inválidas');
        }

    }

    render(){
        const navegar = this.props.navigation;

        return(
            <Container>
                <Content padder contentContainerStyle = {misEstilos.content}>
                    <Card>
                        <CardItem header bordered>
                            <Text style = {misEstilos.textCenter}>
                            Iniciar de sesión
                            </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body style = {misEstilos.body}>
                                <Item inlineLabel>
                                    
                                    <Input placeholder = 'Usuario' onChangeText = {(username)=> this.setState({username})}/>
                                </Item>
                                <Item inlineLabel last>
                                    
                                    <Input placeholder = 'Contraseña' onChangeText = {(pass)=> this.setState({pass})}/>
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                        <Button succes style = {misEstilos.boton} onPress={() => {this.login()}}><Text>Aceptar</Text></Button>

                        
                        </CardItem>
                        <CardItem footer bordered>
    
                        
                        <Button  succes style = {misEstilos.boton} primary onPress = {() => {navegar.navigate('Registro', {titulo: 'Registro de usuario', nombre: 'Nayvick',});}}><Text>Registrar</Text></Button>
                        
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const misEstilos = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        color : 'violet'
    },
    textCenter: {
        textAlign: 'center',
        width: '100%'
    },
    boton: {
        marginLeft: '35%'
    },
    body: {
        paddingVertical: 30
    }
});

export default Login;