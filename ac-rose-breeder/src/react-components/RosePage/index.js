import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TopBar from "../TopBar";
import GeneInput from "../GeneInput";

let range = n => [...Array(n).keys()]

let roseList = [];

//fills up the genes in roseList
for (let i = 0; i < 81; i++) {
    roseList.push({});
}
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
            for (let l = 0; l < 3; l++) {
                let idx = i*27 + j*9 + k*3 + l;
                roseList[idx].r = i;
                roseList[idx].y = j;
                roseList[idx].w = k;
                roseList[idx].s = l;
            }
        }
    }       
}

// fill up colours of roses
roseList[0].colour = "White";
roseList[1].colour = "White";
roseList[2].colour = "White";
roseList[3].colour = "White";
roseList[4].colour = "Seed White";
roseList[5].colour = "White";
roseList[6].colour = "Purple";
roseList[7].colour = "Purple";
roseList[8].colour = "Purple";
roseList[9].colour = "Yellow";
roseList[10].colour = "Yellow";
roseList[11].colour = "Yellow";
roseList[12].colour = "White";
roseList[13].colour = "White";
roseList[14].colour = "White";
roseList[15].colour = "Purple";
roseList[16].colour = "Purple";
roseList[17].colour = "Purple";
roseList[18].colour = "Seed Yellow";
roseList[19].colour = "Yellow";
roseList[20].colour = "Yellow";
roseList[21].colour = "Yellow";
roseList[22].colour = "Yellow";
roseList[23].colour = "Yellow";
roseList[24].colour = "White";
roseList[25].colour = "White";
roseList[26].colour = "White";
roseList[27].colour = "Red";
roseList[28].colour = "Pink";
roseList[29].colour = "White";
roseList[30].colour = "Red";
roseList[31].colour = "Pink";
roseList[32].colour = "White";
roseList[33].colour = "Red";
roseList[34].colour = "Pink";
roseList[35].colour = "Purple";
roseList[36].colour = "Orange";
roseList[37].colour = "Yellow";
roseList[38].colour = "Yellow";
roseList[39].colour = "Red";
roseList[40].colour = "Pink";
roseList[41].colour = "White";
roseList[42].colour = "Red";
roseList[43].colour = "Pink";
roseList[44].colour = "Purple";
roseList[45].colour = "Orange";
roseList[46].colour = "Yellow";
roseList[47].colour = "Yellow";
roseList[48].colour = "Orange";
roseList[49].colour = "Yellow";
roseList[50].colour = "Yellow";
roseList[51].colour = "Red";
roseList[52].colour = "Pink";
roseList[53].colour = "White";
roseList[54].colour = "Black";
roseList[55].colour = "Seed Red";
roseList[56].colour = "Pink";
roseList[57].colour = "Black";
roseList[58].colour = "Red";
roseList[59].colour = "Pink";
roseList[60].colour = "Black";
roseList[61].colour = "Red";
roseList[62].colour = "Pink";
roseList[63].colour = "Orange";
roseList[64].colour = "Orange";
roseList[65].colour = "Yellow";
roseList[66].colour = "Red";
roseList[67].colour = "Red";
roseList[68].colour = "White";
roseList[69].colour = "Black";
roseList[70].colour = "Red";
roseList[71].colour = "Purple";
roseList[72].colour = "Orange";
roseList[73].colour = "Orange";
roseList[74].colour = "Yellow";
roseList[75].colour = "Orange";
roseList[76].colour = "Orange";
roseList[77].colour = "Yellow";
roseList[78].colour = "Blue";
roseList[79].colour = "Red";
roseList[80].colour = "White";

class RosePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genes: [[0, 0, 0, 0], [0, 0, 0, 0]],
            possibleRoses: [0]
        };
    }

    // function for setting genes in state, used by GeneInput onChange
    setGene = (roseNum, geneNum, gene) => {
        let tempGenes = this.state.genes;
        tempGenes[roseNum][geneNum] = gene;
        this.setState({ genes: tempGenes });
        // update what roses are possible given updated parent genes
        console.log(this.state.genes);
        this.updatePossible();
    }

    // updates the possible roses in state given the genes of the parent roses
    updatePossible = () => {
        let min_r, max_r, min_y, max_y, min_w, max_w, min_s, max_s;
        let newPossible = [];

        //finds range of r genes
		if (this.state.genes[0][0] === 1 && this.state.genes[1][0] === 1){
			min_r = 0;
			max_r = 2;
		}
		else{
			min_r = Math.trunc((this.state.genes[0][0] + this.state.genes[1][0]) / 2);
			max_r = (this.state.genes[0][0] + this.state.genes[1][0]) % 2 ? min_r + 1 : min_r;
		}
		
		//finds range of y genes
		if (this.state.genes[0][1] === 1 && this.state.genes[1][1] === 1){
			min_y = 0;
			max_y = 2;
		}
		else{
			min_y = Math.trunc((this.state.genes[0][1] + this.state.genes[1][1]) / 2);
			max_y = (this.state.genes[0][1] + this.state.genes[1][1]) % 2 ? min_y + 1 : min_y;
		}
		
		//finds range of w genes
		if (this.state.genes[0][2] === 1 && this.state.genes[1][2] === 1){
			min_w = 0;
			max_w = 2;
		}
		else{
			min_w = Math.trunc((this.state.genes[0][2] + this.state.genes[1][2]) / 2);
			max_w = (this.state.genes[0][2] + this.state.genes[1][2]) % 2 ? min_w + 1 : min_w;
		}
		
		//finds range of s genes
		if (this.state.genes[0][3] === 1 && this.state.genes[1][3] === 1){
			min_s = 0;
			max_s = 2;
		}
		else{
			min_s = Math.trunc((this.state.genes[0][3] + this.state.genes[1][3]) / 2);
			max_s = (this.state.genes[0][3] + this.state.genes[1][3]) % 2 ? min_s + 1 : min_s;
		}
        for (let i = min_r; i <= max_r; i++){
			for (let  j = min_y; j <= max_y; j++){
				for (let  k = min_w; k <= max_w; k++){
					for (let l = min_s; l <= max_s; l++){
						let idx = 27 * i + 9 * j + k * 3 + l;
                        newPossible.push(idx);
                    }
                }
            }
        }
        this.setState({possibleRoses: newPossible});
    }

    render() {
        return (<Box>
            <TopBar>
            </TopBar>
            <Grid container justifyContent="center" sx={{ my: 3 }}>
                <Typography variant="h4">
                    To find out what potential roses you can breed, please change the fields below.
                </Typography>
            </Grid>

            <Grid container justifyContent="center" sx={{ my: 3 }}>
                <Grid container xs={4}></Grid>
                <Grid container xs={2} justifyContent="center">
                    <Typography variant="h5" sx={{ my: 3 }}>
                        Parent 1
                    </Typography>
                    <Grid container justifyContent="space-evenly">
                        {range(4).map((number) => <GeneInput setGene={this.setGene} roseNum={0} number={number}></GeneInput>)}
                    </Grid>
                </Grid>
                <Grid container xs={2} justifyContent="center">
                    <Typography variant="h5" sx={{ my: 3 }}>
                        Parent 2
                    </Typography>
                    <Grid container justifyContent="space-evenly">
                        {range(4).map((number) => <GeneInput setGene={this.setGene} roseNum={1} number={number}></GeneInput>)}
                    </Grid>
                </Grid>
                <Grid container xs={4}></Grid>
                <Grid container justifyContent="center">
                    <Typography variant="h4" sx={{ mt: 7, mb: 2}}>
                        All Possible Rose Offspring
                    </Typography>
                </Grid>
                {this.state.possibleRoses.map((idx => <Grid container justifyContent="center" xs={12}><Typography variant="h6">{roseList[idx].colour}: {roseList[idx].r}{roseList[idx].y}{roseList[idx].w}{roseList[idx].s}</Typography></Grid>))}
            </Grid>
        </Box>
        );
    }
}

export default RosePage;