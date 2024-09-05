const elements =(
    <div title = "Outer div">
        <h2>Basic app with React<ol> 
         <li> How React application works</li>
            <li>How to compile React JSX at runtime</li>
            <li>Move compilation and serving file to the server</li>
            <li>Used Babel to transiple the JSX code</li> 
            <li>Understand how to automate the code compilation</li>
        </ol></h2>
        <h1>// this data is comming from the app.js file that is made from the app.jsx file where we have all our code and the data 
        // and to convert jsx file into the js file we are using the babel package
        // lets install the babel packages</h1>
        <ul>
            <li>npm install Babel tools</li>
            <li>npm install --save-dev @babel/core@7 @babel/cli@7</li>
            <li>npm install --save-dev @babel/preset-react@7</li>   
        </ul>
        <h1>After installing the babel packages you can add the compile and watch in the package.json
            <ol>
                <li>we use compile command to do the convertion of the jsx file into the js file before the execution or during development however it happenes when we execute our code</li>
                <li>we use the watch dependencies to keep tracking the changes in the jsx file and reconverting them into the js file during developement</li>
            </ol>
            <h3> "start": "nodemon -w main.js",
            "watch": "babel Jsx --out-dir public --watch --verbose --presets @babel/preset-react",</h3>
        </h1>
    </div>

);
ReactDOM.render(elements, document.getElementById('contents'));
