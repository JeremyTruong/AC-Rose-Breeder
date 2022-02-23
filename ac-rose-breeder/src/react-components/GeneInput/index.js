import React from "react";
import { TextField } from "@mui/material";

class GeneInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        if (e.target.value < 0 || e.target.value > 2) {
        alert("Gene values must be between 0 and 2 (inclusive).");
        e.target.value = 0;
      }
        this.props.setGene(Number(this.props.roseNum), Number(this.props.number), Number(e.target.value));
    }

    // dictionary of gene number to type
    geneType = {0: "R", 1: "Y", 2: "W", 3: "S"};

    render() {
        return (<TextField
            id="outlined-number"
            label={"Gene " + this.geneType[this.props.number]}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            size="small"
            onChange={this.handleChange}
            defaultValue={0}
            sx={{maxWidth: "75px"}}
          />);
    }
}

export default GeneInput;