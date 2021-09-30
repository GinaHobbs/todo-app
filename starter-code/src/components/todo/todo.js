import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import {SiteContext} from '../../context/site.js';
import { Button, Card } from "@blueprintjs/core";

import { v4 as uuid } from 'uuid';

import Header from '../header.js'
import Form from '../form.js'

const ToDo = () => {

  const siteContext = useContext(SiteContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    console.log(items)
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });
    setList(items);
  }

  function removeComplete() {
    //pass in items, filter by status is incomplete
    const items = list.filter(item => !item.complete)
    // if showCompleted is false
    if (siteContext.showCompleted === false) {
      // set the list to only incomplete
      return items;
    }
  }

  function getTotalPages() {
    const items = removeComplete();
    const count = Math.ceil(items.length / siteContext.itemsPerPage)
    let pageNumbers = []
    for (let i=1;i<=count;i++){
      pageNumbers.push(i)
    }
    return pageNumbers
  }

  function pagination() {
    let items = removeComplete();
    items = list.slice(((currentPage-1) * siteContext.itemsPerPage), ((currentPage-1) + (siteContext.itemsPerPage)))
    return items
  }

  function handleCurrentPage(item) {
    setCurrentPage(item);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
    <Header status={incomplete} />
    <div className="container">
      <div className="column-1">
        <Form handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
      <div className="column-2">
        {pagination().map(item => (
          <Card>
            <div key={item.id}>
              <p>{item.text}</p>
              <p><small>Assigned to: {item.assignee}</small></p>
              <p><small>Difficulty: {item.difficulty}</small></p>
              <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
              <hr />
            </div>
          </Card>
        ))}
      </div>
    </div>
    <div className="pagination">
      {getTotalPages().map(item => (
        <Button onClick={() => handleCurrentPage(item)}>{item}</Button>
      ))}
    </div>

    </>
  );
};

export default ToDo;
