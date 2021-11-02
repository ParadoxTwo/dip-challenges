import { useState } from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";

function Challenge1() {
  const [input1Sol1, setInput1Sol1] = useState("");
  const [input2Sol1, setInput2Sol1] = useState("");
  const [solutionText1, setSolutionText1] = useState("");
  const solution1 = () => {
    const compare = (version1, version2) => {
      let v1 = version1.split(".");
      let v2 = version2.split(".");
      let count = v1.length > v2.length ? v1.length : v2.length;
      let i = 0;
      let out = 0;
      for (; i < count; i++) {
        let a = parseInt(v1[i]);
        if (isNaN(a)) {
          out = -1;
          break;
        }
        let b = parseInt(v2[i]);
        if (isNaN(b)) {
          out = 1;
          break;
        }
        if (a > b) {
          out = 1;
          break;
        } else if (a === b) {
          out = 0;
        } else {
          out = -1;
          break;
        }
      }
      return out;
    };
    let version1 = input1Sol1.value;
    let version2 = input2Sol1.value;
    let res = compare(version1, version2);

    setSolutionText1(res.toString());
  };
  return (
    <div className="Challeng1">
      <h2>Problem 1</h2>
      <p>
        Version numbers are strings that are used to identify unique states of
        software products. A version number is in the format a.b.c.d. and so on
        where a, b, etc. are numeric strings separated by dots. These generally
        represent a hierarchy from major to minor changes. Given two version
        numbers version1 and version2, conclude which is the latest version
        number. Your code should do the following:
        <br />
        If version1 &#62; version2 return 1.
        <br />
        If version1 &#60; version2 return -1.
        <br />
        Otherwise return 0.
        <br />
        <br />
        Note that the numeric strings such as a, b, c, d, etc. may have leading
        zeroes, and that the version strings do not start or end with dots.
        Unspecified level revision numbers default to 0.
      </p>
      <h2>Solution</h2>

      <FormControl>
        <InputLabel htmlFor="sol1Input1">Version 1</InputLabel>
        <Input
          id="sol1Input1"
          aria-describedby="my-helper-sol1Input1"
          onChange={(e) => setInput1Sol1(e.target)}
        />
        <FormHelperText id="my-helper-sol1Input1">
          Example 3.44.1
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="sol1Input2">Version 2</InputLabel>
        <Input
          id="sol1Input2"
          aria-describedby="my-helper-sol1Input2"
          onChange={(e) => setInput2Sol1(e.target)}
        />
        <FormHelperText id="my-helper-sol1Input2">
          Example 1.2.44
        </FormHelperText>
      </FormControl>
      <br />
      <p id="solution1">Output: {solutionText1}</p>
      <Button onClick={solution1}>Submit</Button>
    </div>
  );
}

export default Challenge1;
