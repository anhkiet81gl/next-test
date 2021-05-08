import React, {Component} from 'react';
import Layout from "./components/Layout";
import Todo from "./components/Todo";

class Todolist extends Component {
    render() {
        return (
            <>
                <Layout>
                    <Todo title="Todo list 1">
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    </Todo>
                    <Todo title="Todo list 2">
                        It is a long established fact that a reader will be distracted by the readable content of a page
                    </Todo>
                    <Todo title="Todo list 3">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    </Todo>
                    <Todo title="Todo list 4">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    </Todo>
                </Layout>
            </>

        );
    }
}

export default Todolist;