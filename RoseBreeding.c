#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char **argv) {
	
	typedef struct rose{
		int r, y, w, s;
		char* colour;
	} Rose;
	
	Rose rose_list[81];
	
	//fills up the genes in roselist
	for (int i = 0; i < 81; i++){
		int remainder = i % 3;
		int quotient = i / 3;
		rose_list[i].s = remainder;
		remainder = quotient % 3;
		quotient = quotient / 3;
		rose_list[i].w = remainder;
		remainder = quotient % 3;
		quotient = quotient / 3;
		rose_list[i].y = remainder;
		remainder = quotient % 3;
		quotient = quotient / 3;
		rose_list[i].r = remainder;
	}
	
	rose_list[0].colour = "White";
	rose_list[1].colour = "White";
	rose_list[2].colour = "White";
	rose_list[3].colour = "White";
	rose_list[4].colour = "Seed White";
	rose_list[5].colour = "White";
	rose_list[6].colour = "Purple";
	rose_list[7].colour = "Purple";
	rose_list[8].colour = "Purple";
	rose_list[9].colour = "Yellow";
	rose_list[10].colour = "Yellow";
	rose_list[11].colour = "Yellow";
	rose_list[12].colour = "White";
	rose_list[13].colour = "White";
	rose_list[14].colour = "White";
	rose_list[15].colour = "Purple";
	rose_list[16].colour = "Purple";
	rose_list[17].colour = "Purple";
	rose_list[18].colour = "Seed Yellow";
	rose_list[19].colour = "Yellow";
	rose_list[20].colour = "Yellow";
	rose_list[21].colour = "Yellow";
	rose_list[22].colour = "Yellow";
	rose_list[23].colour = "Yellow";
	rose_list[24].colour = "White";
	rose_list[25].colour = "White";
	rose_list[26].colour = "White";
	rose_list[27].colour = "Red";
	rose_list[28].colour = "Pink";
	rose_list[29].colour = "White";
	rose_list[30].colour = "Red";
	rose_list[31].colour = "Pink";
	rose_list[32].colour = "White";
	rose_list[33].colour = "Red";
	rose_list[34].colour = "Pink";
	rose_list[35].colour = "Purple";
	rose_list[36].colour = "Orange";
	rose_list[37].colour = "Yellow";
	rose_list[38].colour = "Yellow";
	rose_list[39].colour = "Red";
	rose_list[40].colour = "Pink";
	rose_list[41].colour = "White";
	rose_list[42].colour = "Red";
	rose_list[43].colour = "Pink";
	rose_list[44].colour = "Purple";
	rose_list[45].colour = "Orange";
	rose_list[46].colour = "Yellow";
	rose_list[47].colour = "Yellow";
	rose_list[48].colour = "Orange";
	rose_list[49].colour = "Yellow";
	rose_list[50].colour = "Yellow";
	rose_list[51].colour = "Red";
	rose_list[52].colour = "Pink";
	rose_list[53].colour = "White";
	rose_list[54].colour = "Black";
	rose_list[55].colour = "Seed Red";
	rose_list[56].colour = "Pink";
	rose_list[57].colour = "Black";
	rose_list[58].colour = "Red";
	rose_list[59].colour = "Pink";
	rose_list[60].colour = "Black";
	rose_list[61].colour = "Red";
	rose_list[62].colour = "Pink";
	rose_list[63].colour = "Orange";
	rose_list[64].colour = "Orange";
	rose_list[65].colour = "Yellow";
	rose_list[66].colour = "Red";
	rose_list[67].colour = "Red";
	rose_list[68].colour = "White";
	rose_list[69].colour = "Black";
	rose_list[70].colour = "Red";
	rose_list[71].colour = "Purple";
	rose_list[72].colour = "Orange";
	rose_list[73].colour = "Orange";
	rose_list[74].colour = "Yellow";
	rose_list[75].colour = "Orange";
	rose_list[76].colour = "Orange";
	rose_list[77].colour = "Yellow";
	rose_list[78].colour = "Blue";
	rose_list[79].colour = "Red";
	rose_list[80].colour = "White";
	
	int p1_r, p2_r, p1_y, p2_y, p1_w, p2_w, p1_s, p2_s, min_r, max_r, min_y, max_y, min_w, max_w, min_s, max_s, p1_idx, p2_idx;
	
	printf("\nFORMAT: { xxxx | x = 0, 1, 2} Example: 1201\n\n");
	
	while(1){
		//get input for parent1's genes
		do {
			printf("Please input Parent 1's genes: ");
			scanf("%1d%1d%1d%1d", &p1_r, &p1_y, &p1_w, &p1_s);
		} while (p1_r < 0 || p1_r > 2 || p1_y < 0 || p1_y > 2 || p1_w < 0 || p1_w > 2 || p1_s < 0 || p1_s > 2);
		
		p1_idx = (p1_r * 27) + (p1_y * 9) + (p1_w * 3) + p1_s;
		printf("Parent 1: %s - %d%d%d%d\n\n", rose_list[p1_idx].colour, rose_list[p1_idx].r, rose_list[p1_idx].y, rose_list[p1_idx].w, rose_list[p1_idx].s);
		
		//get input for parent2's genes
		do {
			printf("Please input Parent 2's genes: ");
			scanf("%1d%1d%1d%1d", &p2_r, &p2_y, &p2_w, &p2_s);
		} while (p2_r < 0 || p2_r > 2 || p2_y < 0 || p2_y > 2 || p2_w < 0 || p2_w > 2 || p2_s < 0 || p2_s > 2);
		
		p2_idx = (p2_r * 27) + (p2_y * 9) + (p2_w * 3) + p2_s;
		printf("Parent 2: %s - %d%d%d%d\n", rose_list[p2_idx].colour, rose_list[p2_idx].r, rose_list[p2_idx].y, rose_list[p2_idx].w, rose_list[p2_idx].s);
		
		
		//finds range of r genes
		if (p1_r == 1 && p2_r == 1){
			min_r = 0;
			max_r = 2;
		}
		else{
			min_r = (p1_r + p2_r) / 2;
			max_r = (p1_r + p2_r) % 2 ? min_r + 1 : min_r;
		}
		
		//finds range of y genes
		if (p1_y == 1 && p2_y == 1){
			min_y = 0;
			max_y = 2;
		}
		else{
			min_y = (p1_y + p2_y) / 2;
			max_y = (p1_y + p2_y) % 2 ? min_y + 1 : min_y;
		}
		
		//finds range of w genes
		if (p1_w == 1 && p2_w == 1){
			min_w = 0;
			max_w = 2;
		}
		else{
			min_w = (p1_w + p2_w) / 2;
			max_w = (p1_w + p2_w) % 2 ? min_w + 1 : min_w;
		}
		
		//finds range of s genes
		if (p1_s == 1 && p2_s == 1){
			min_s = 0;
			max_s = 2;
		}
		else{
			min_s = (p1_s + p2_s) / 2;
			max_s = (p1_s + p2_s) % 2 ? min_s + 1 : min_s;
		}
		
		//print all possible child roses
		printf("\nALL POSSIBLE CHILDREN\n------------------------------\n");
		for (int i = min_r; i <= max_r; i++){
			for (int j = min_y; j <= max_y; j++){
				for (int k = min_w; k <= max_w; k++){
					for (int l = min_s; l <= max_s; l++){
						int idx = 27 * i + 9 * j + k * 3 + l;
						printf("%s - %d%d%d%d\n", rose_list[idx].colour, rose_list[idx].r, rose_list[idx].y, rose_list[idx].w, rose_list[idx].s);
					}
				}
			}
		}
	}
	
	return 0;
}
