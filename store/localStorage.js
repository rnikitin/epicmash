import { string } from "postcss-selector-parser";

export const state = () => ({
    rawText: "",
    list: []
})

export const mutations = {
  save(state, text) {
    // reset
    state.list = [];

    // cache 
    state.rawText = text;

    // split and save separate lines
    text.split('\n').forEach(line => {
        // prepare line 
        line = line.trim();

        // skip empty lines
        if (line != ""){
            // add it to storage
            state.list.push({ 
                epic: line, 
                rank: 0 
            });
        }
    });
  }
}