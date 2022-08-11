import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {

};

function ListPage(props) {
    const inittodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(inittodoList);
    const [filterStatus, setFilter] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilter(params.status || 'all');
    }, [location.search]);

    const handleTodoClick = (todo, index) => {
        //clone current array to the new one
        const newTodoList = [...todoList];

        //toggle state
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };

        //update todo list
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        //setFilter('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const handleShowConpletedClick = () => {
        //setFilter('completed');
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const handleShowNewClick = () => {
        //setFilter('new');
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const renderedTodoList = useMemo(() => {
        return todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    }, [todoList, filterStatus])

    const handleTodoFormSubmit = (values) => {
        console.log('Form submit: ', values);
    };
    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowConpletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;