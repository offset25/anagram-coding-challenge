<script>
// Edit your script here
/* by Dino Bartolome */
// solution also located at: https://js.do/code/test-str-array-anagram

const groupByAnagrams = (listOfWords) => {
  // The logic here is to group by anagram
  let arr_grouped_anagrams = [];
  // can sort here but not matching clients result so we sort later
  //listOfWords.sort();
  //console.info(listOfWords);
  for (i=0; i < listOfWords.length-1;i++) {
  	for(n=i+1; n < listOfWords.length;n++) {
    	
    	let a_sorted = listOfWords[i].toLowerCase().split('').sort().join('');
        let b_sorted = listOfWords[n].toLowerCase().split('').sort().join('');
        
        
        // check if we have matching str with the same length greater than 0
        // if we have a match add to our grouped anagram array
        if (a_sorted == b_sorted && a_sorted.length > 0 && b_sorted.length == a_sorted.length) {
        	//console.info(a_sorted);
        	//console.info(b_sorted);
            let is_found = false;
            
            // go through our grouped anagrams array and see if we can fit our current word in there
        	for(p=0; p < arr_grouped_anagrams.length;p++) {
	        	if (arr_grouped_anagrams[p].length > 0) {       	
                	let p_item_sorted = arr_grouped_anagrams[p][0].toLowerCase().split('').sort().join('');
                	// check if we have match in our existing roup with our current word
                    if (p_item_sorted == a_sorted && p_item_sorted.length == a_sorted.length && a_sorted.length > 0) {
                    	is_found = true;
                        // check if item already added if not add it to the end
                        if(arr_grouped_anagrams[p].length > 0 && !arr_grouped_anagrams[p].includes(listOfWords[i])) {
                        	 arr_grouped_anagrams[p][arr_grouped_anagrams[p].length] = listOfWords[i];
                        }
                        
                        // check if item already added if not add it to the end
                    	if(arr_grouped_anagrams[p].length > 0 && !arr_grouped_anagrams[p].includes(listOfWords[n])) {
                        	 arr_grouped_anagrams[p][arr_grouped_anagrams[p].length] = listOfWords[n];
                        }
                    }    
                }
            }
            // if not found add to end of array
            if (!is_found) {
            	let group_index = arr_grouped_anagrams.length;
                arr_grouped_anagrams[group_index] = [];
              	arr_grouped_anagrams[group_index][arr_grouped_anagrams[group_index].length] = listOfWords[i];
                arr_grouped_anagrams[group_index][arr_grouped_anagrams[group_index].length] = listOfWords[n];
            }
            
        }
    }
    // since above sort doesn't match client results then sort here
    for(p=0; p < arr_grouped_anagrams.length;p++) {
    	arr_grouped_anagrams[p].sort();
    }
  }
  return arr_grouped_anagrams;
}

const arr = ['cats', 'idea', 'acts', 'agree', 'aide', 'cast', 'eager', 'bbcc', 'bc'];


console.log(groupByAnagrams(arr));
</script>
click on run code and look at console for results
<!-- edit your html here -->
