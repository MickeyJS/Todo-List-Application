import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from "react-native";


export default class TodoItem extends React.Component {
    render() {
        return (
            <View key={this.props.keyVal} style={styles.todoItem}>
                <Text style={styles.todoItem__content}>{this.props.todoItem}</Text>
                <TouchableOpacity style={styles.todoItem__deleteButton}
                                  onPress= {this.props.deleteTodoItem}>
                    <Text style={styles.todoItem__deleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    todoItem: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    todoItem__content: {
        color: '#651FFF',
        fontSize: 16,
        paddingLeft: 20,
    },
    todoItem__deleteButton: {
        position: 'absolute',
        backgroundColor: '#ed1218',
        height: 40,
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
        borderRadius: 4
    },
    todoItem__deleteText: {
        color: 'white',
        fontWeight: '800'
    }
});

