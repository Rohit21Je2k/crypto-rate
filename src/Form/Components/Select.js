import React from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

function Select(props) {
  return (
    <Autocomplete
      id={props.id}
      options={props.data}
      onChange={props.onChange}
      autoComplete
      autoHighlight
      getOptionLabel={(option) => option.name}
      style={{ width: "100%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          placeholder={props.placeholder}
        />
      )}
    />
  );
}

export default Select;
