import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='fullPage'>
            <h2>1. What is the purpose of react router?</h2>
            <p className='blogs'><span className='ans'>Answer:</span> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            <h2>2. how does context api works?</h2>
            <p className='blogs'><span className='ans'>Answer:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h2>3. What is useref in react?</h2>
            <p className='blogs'><span className='ans'>Answer:</span> However, useRef() is useful for more than the ref attribute. It's handy for keeping any mutable value around similar to how you'd use instance fields in classes.
                This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a object yourself is that useRef will give you the same ref object on every render.</p>

        </div >
    );
};

export default Blog;