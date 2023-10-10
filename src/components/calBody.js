import { Component } from "react";

class CalBody extends Component
{  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
      equation: "", // Initialize an empty equation
      operator: null,
      firstOperand: null,
      showEquation: false, // New state to control when to display the equation
    };
  }

  calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        if (secondOperand === 0) {
          return "Error"; // Handle division by zero
        }
        return firstOperand / secondOperand;
      default:
        return secondOperand; // If no operator is set, return the secondOperand as-is
    }
  };

  handleButtonClick = (value) => {
    this.setState((prevState) => ({
      displayValue: prevState.displayValue === "0" ? value : prevState.displayValue + value,
      equation: prevState.equation + value, // Append value to the equation
      showEquation: false, // Hide the equation
    }));
  };

  handleOperatorClick = (operator) => {
    this.setState((prevState) => ({
      equation: `${prevState.equation} ${operator} `, // Append the operator and a space to the equation
      operator,
      firstOperand: parseFloat(prevState.displayValue),
      displayValue: "0", // Clear the display for the next input
    }));
  };

  handleEqualsClick = () => {
    const { displayValue, firstOperand, operator } = this.state;
  
    if (firstOperand !== null && operator !== null) {
      const result = this.calculate(
        firstOperand,
        parseFloat(displayValue),
        operator
      );

      this.setState({
        displayValue: result.toString(),
        equation: `${firstOperand} ${operator} ${displayValue} = ${result}`, // Append the result to the equation
        operator: null,
        firstOperand: null,
        showEquation: true, // Show the equation
      });
    }
  };

  handleClearClick = () => {
    this.setState({
      displayValue: "0",
      equation: "",
      operator: null,
      firstOperand: null,
      showEquation: false, // Hide the equation
    });
  };
  
    render()
    {
        return(
            <section>
        
           
        <div class="center-box">
            <div class="output">
                <p>{this.state.equation}</p>
                
            </div>
            <div class="d-flex">
                
            <div class="buttons">
                <button onClick={() => this.handleButtonClick(7)} class="button">7</button>
                <button onClick={() => this.handleButtonClick(8)}  class="button">8</button>
                <button onClick={() => this.handleButtonClick(9)} class="button">9</button>
                <button onClick={() => this.handleButtonClick(4)} class="button">4</button>
                <button onClick={() => this.handleButtonClick(5)}  class="button">5</button>
                <button onClick={() => this.handleButtonClick(6)}  class="button">6</button>
                <button onClick={() => this.handleButtonClick(1)}  class="button">1</button>
                <button onClick={() => this.handleButtonClick(2)} class="button">2</button>
                <button onClick={() => this.handleButtonClick(3)} class="button">3</button>
                <button onClick={() => this.handleButtonClick(0)}  class="button left-cor">0</button>
                <button onClick={() => this.handleButtonClick(7)}  class="button">.</button>
                <button onClick={() => this.handleEqualsClick()} class="button">=</button>
            </div>
            <div class="nestedb">
                <button onClick={() => this.handleClearClick()} class="button">BS</button>
                <button onClick={() => this.handleOperatorClick('/')} class="button">/</button>
                <button onClick={() => this.handleOperatorClick('*')}  class="button">*</button>
                <button onClick={() => this.handleOperatorClick('-')}  class="button">-</button>
                <button onClick={() => this.handleOperatorClick('+')}  class="button right-cor">+</button>

            </div>
            </div>
        </div>

            </section>
        )
    }
}

export default CalBody;