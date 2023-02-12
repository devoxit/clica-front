import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const FormItem = ({ item, onChange, answer }) => {
    const [currentValue, setCurrentValue] = useState(answer || null);

  const handleChange = (value) => {
    setCurrentValue(value);
    onChange(value, item.value);
  }
  
  switch (item.type) {
    case "text":
      return (
        <>
          <div class="col-md-12">
            <label class="form-label" htmlFor="code">
              {item.label}
            </label>
            <input
              class="form-control form-icon-input"
             
              type="text"
              placeholder="code"
              onChange={(e) => handleChange(e.target.value, item.value)}
              value={currentValue}
            />
            
          </div>

          {/* <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="text"
            id={item.label}
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue} 
            
          />
            */}
        </>
      );
      break;
    case "password":
      return (
        <>
          <div class="col-md-12">
            <label class="form-label" htmlFor="password">
              {item.label}
            </label>
            <input
              class="form-control form-icon-input"
              id="password"
              type="password"
              placeholder="password"
              onChange={(e) => onChange(e.target.value, item.value)}
            />
          </div>
          {/* <Form.Label htmlFor="inputPassword5">{item.label}</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => onChange(e.target.value, item.value)}
          /> */}
        </>
      );
      break;
    case "email":
      return (
        <>
          <div class="col-md-12">
            <label class="form-label" htmlFor="email">
              {item.label}
            </label>
            <input
              class="form-control form-icon-input"
              id="email"
              type="email"
              placeholder="email"
              onChange={(e) => onChange(e.target.value, item.value)}
            />
           
          </div>

          {/* <Form.Label htmlFor="inputPassword5">{item.label}</Form.Label>
          <Form.Control
            type="email"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => onChange(e.target.value, item.value)}
          /> */}
        </>
      );
      break;
    case "information":
      return <p className="text-center">{item.label}</p>;
    case "select":
      return (
        <div className="mt-2">
          <Form.Select
            aria-label={item.label}
            onChange={(e) => onChange(e.target.value, item.value)}
          >
            <option>{item.label}</option>
            {item.options.map((opt, index) => {
              return <option value={opt}>{opt}</option>;
            })}
          </Form.Select>
        </div>
      );

      return <></>;
  }
};
