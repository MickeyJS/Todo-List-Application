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
            <View key={this.props.keyVal} style={styles.todo}>
                <Text style={styles.todo__content}>{this.props.todoItem}</Text>
                <TouchableOpacity style={styles.deleteNote}
                                  onPress= {this.props.deleteTodoItem}>
                    <Text style={styles.deleteNoteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    todo: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    todo__content: {
        color: '#651FFF',
        fontSize: 16,
        paddingLeft: 20,
        marginLeft: 10,
    },
    deleteNote: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ed1218',
        height: 40,
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
        borderRadius: 4
    },
    deleteNoteText: {
        color: 'white',
        fontWeight: '800'
    }
});

