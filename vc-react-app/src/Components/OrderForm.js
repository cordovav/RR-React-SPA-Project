import Form from 'react-bootstrap/Form';
import React, { useState, useEffect} from 'react';


function OrderForm() {
    //create a function to render a different preferences for each juice selection
    const [selectedOption, setselectedOption] = useState("");
    const [checkboxes, setCheckboxes] = useState([])

        if (selectedOption === 'orange-juice' ){
            setCheckboxes([
            <input type="checkbox" name="checkbox1" value="checkbox1"> Checkbox 1<br>
            <input type="checkbox" name="checkbox2" value="checkbox2"> Checkbox 2<br>
            ]);
            } else if (selectedOption === "fruit-punch") {
            container.innerHTML = `
            <input type="checkbox" name="checkbox3" value="checkbox3"> Checkbox 3<br>
            <input type="checkbox" name="checkbox4" value="checkbox4"> Checkbox 4<br>
            `;
            } else if (selectedOption === "green-juice") {
            container.innerHTML = `
            <input type="checkbox" name="checkbox5" value="checkbox5"> Checkbox 5<br>
            <input type="checkbox" name="checkbox6" value="checkbox6"> Checkbox 6<br>
            `;
            }
    }

    return (
        <div>
    <Form >
        <Form.Select size="lg" id="options" onchange="OrderForm()">
        <option>Open To Select Your Beverage</option>
        <option value='orange-juice'>Orange</option>
        <option value='fruit-punch'>Fruit Punch</option>
        <option value='green-juice'>Green Juice</option>
        </Form.Select>
        <br />
        <div id="checkbox-container"></div>
    
    </Form>
    </div>
    );
}

export default OrderForm;