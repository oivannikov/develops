import { useState } from 'react';

import Link from 'next/link';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function handleCreateSubmit(e) {
    e.preventDefault();

    console.log(title);
    console.log(body);
    

    setTitle('');
    setBody('');

  }

  return (
    <form className="form" onSubmit={(e) => handleCreateSubmit(e)}>
      <div className="form__data">
        <input
          className="form__input"
          type="text"
          value={title}
          placeholder="Title"
          onChange={({ target }) => setTitle(target.value)}
          required
        />

        <textarea
          className="form__textarea"
          value={body}
          name="body"
          placeholder="Enter text"
          onChange={({ target }) => setBody(target.value)}
          required
        />
      </div>
      
      <div className="form__actions">
        <button className="form__create" type="submit">Create</button>

        <Link href={'/posts'}>
          <button className="form__back" type="button">Back</button>
        </Link>
      </div>
    </form>
      
  );
} 

export default CreatePost;