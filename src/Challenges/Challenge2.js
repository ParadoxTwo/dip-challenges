import { useState } from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";

function Challenge2() {
  const [input1Sol2, setInput1Sol2] = useState("");
  const [solutionText, setSolutionText] = useState("");
  const [inputArray, setInputArray] = useState([]);
  const add = () => {
    setInputArray((oldArray) => [...oldArray, input1Sol2.value]);
    input1Sol2.value = "";
    setInput1Sol2("");
  };
  const solution = () => {
    let output = [];
    inputArray.forEach((l) => {
      inputArray.forEach((m) => {
        inputArray.forEach((con) => {
          if (l + m === con) {
            output.push(con);
          }
        });
      });
    });
    setSolutionText(output.toString());
  };
  return (
    <div className="Challeng2">
      <h2>Problem 2</h2>
      <p>
        Find all words that are concatenations of a list.
        <br />
        <br />
        Input:
        <br />
        ["tech", "lead", "techlead", "cat", "cats", "dog", "catsdog"]
        <br />
        Output:
        <br />
        ['techlead', 'catsdog']
      </p>
      <h2>Solution</h2>

      <FormControl>
        <InputLabel htmlFor="sol2Input1">Input Text</InputLabel>
        <Input
          id="sol2Input1"
          aria-describedby="my-helper-sol2Input1"
          onChange={(e) => {
            setInput1Sol2(e.target);
          }}
        />
        <FormHelperText id="my-helper-sol2Input1">
          [
          {inputArray.map((e, i) => (
            <span key={i}>"{e.toString()}",</span>
          ))}
          ]
        </FormHelperText>
        <Button onClick={add}>Add</Button>
      </FormControl>
      <br />
      <p id="solution2">Output: {solutionText}</p>
      <Button onClick={solution}>Submit</Button>
    </div>
  );
}

export default Challenge2;
