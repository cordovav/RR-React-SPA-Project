import Form from 'react-bootstrap/Form';
import React, { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';


function OrderForm() {
    //create a function to render a different preferences for each juice selection
    const [selectedOption, setselectedOption] = useState('');
    const [checkboxes, setCheckboxes] = useState({
        option1: [
            { name: "checkbox1", value: "checkbox1", label: "With Pulp" },
            { name: "checkbox2", value: "checkbox2", label: "No Pulp" },
            { name: "checkbox3", value: "checkbox3", label: "Lrg" },
            { name: "checkbox4", value: "checkbox4", label: "Small" }
            ],
        option2: [
            { name: "checkbox5", value: "checkbox5", label: "Seasonal Tropical Flavor" },
            { name: "checkbox6", value: "checkbox6", label: "Berry Pineapple" },
            { name: "checkbox7", value: "checkbox7", label: "Lrg" },
            { name: "checkbox8", value: "checkbox8", label: "Small" }
            ],
        option3: [            
            { name: "checkbox9", value: "checkbox9", label: "BitterGreens" },
            { name: "checkbox10", value: "checkbox10", label: "SweetGreens" },
            { name: "checkbox11", value: "checkbox11", label: "Lrg" },
            { name: "checkbox12", value: "checkbox12", label: "Small" }
            ],
    });

    useEffect(() =>{
        if (!checkboxes[selectedOption]) {
            setCheckboxes({
                ...checkboxes,
                [selectedOption]:[],
            })
        }
    
        }, [selectedOption, checkboxes])


    return (
    <Form >
        <Form.Select size="lg" value={selectedOption} onChange={e => setselectedOption(e.target.value)}>
        <option>Open To Select Your Beverage</option>
        <option value='option1'>Orange</option>
        <option value='option2'>Fruit Punch</option>
        <option value='option3'>Green Juice</option>
        </Form.Select>
        <br />
        <div>
            {checkboxes[selectedOption] && checkboxes[selectedOption].map((checkbox, index) => (
                <div key={index}>
                    <input type="checkbox" name={checkbox.name} value={checkbox.value}/>
                    <label>{checkbox.label}</label>
                    </div>

            ))}
        </div>
        <Button variant="danger" type="submit">Place Order</Button>
    </Form>
    
    );
}

export default OrderForm;