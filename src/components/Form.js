import React from 'react';

const Form = () => (
  <form>
    <h3>ADD NEW BOOK</h3>
    <div>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </div>
  </form>
);

export default Form;
