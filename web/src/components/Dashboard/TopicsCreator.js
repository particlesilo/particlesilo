import React, { useState } from 'react';
import TopicsForm from './TopicsForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const TopicsCreator = ({ topicks, addTopic, removeTopic, updateTopic }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
      updateTopic(edit.id, value);
      setEdit({
        id: null,
        value: ''
      });
    };

    if (edit.id) {
        return <TopicsForm edit={edit} onSubmit={submitUpdate} />;
      }
      return topicks.map((topick, index) => (
          <div
            className={todo.isComplete ? 'topic-row complete' : 'topic-row'}
            key={index}
          >
            <div key={topic.id} onClick={() => completeTodo(topic.id)}>
              {topic.text}
            </div>
            <div className='icons'>
              <RiCloseCircleLine
                onClick={() => removeTodo(topic.id)}
                className='delete-icon'
              />
              <TiEdit
                onClick={() => setEdit({ id: topic.id, value: topic.text })}
                className='edit-icon'
              />
            </div>
          </div>
        ));
      };

      export default TopicsCreator;
