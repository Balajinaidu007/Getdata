define("DS/MyWidget/scripts/MyWidget", [], function () {
    'use strict';
    
    var myWidget = {
        onLoad: function () {
            // Creating HTML content with form-like structure
            widget.body.innerHTML = `
                <div class='main-Container' id='mainContainer'>
                    <h3>Object Creation Form</h3>
                    <form id="objectForm">
                        <label for="type">Type:</label>
                        <input type="text" id="type" name="type" placeholder="Enter Type"><br><br>
                        
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter Name"><br><br>
                        
                        <label for="revision">Revision:</label>
                        <input type="text" id="revision" name="revision" placeholder="Enter Revision"><br><br>
                        
                        <label for="attribute1">Attribute 1:</label>
                        <input type="text" id="attribute1" name="attribute1" placeholder="Enter Attribute 1"><br><br>
                        
                        <button type="submit">Submit</button>
                    </form>
                </div>
            `;
        }
    };

    widget.addEvent('onLoad', myWidget.onLoad);
});
