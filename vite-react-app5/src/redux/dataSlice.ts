import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface MovieState {
    count:number,
    isLoading: boolean,
    error: string|null;
    names: string[]
}

const initState:MovieState = {
    count: 0,
    isLoading: false,
    error: null,
    names: []

};

export const fetchMovies = createAsyncThunk(
    "/movies/all",
    async ()=>{
        setTimeout(()=>{},20000);
        const url = 'https://imdb236.p.rapidapi.com/imdb/tt7631058/cast';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '88ac45ece0mshe4a5e6bbc8acc88p1ea324jsn73982ef9be77',
                'x-rapidapi-host': 'imdb236.p.rapidapi.com'
            }
        };

        try {
	const response = await fetch(url, options);
	const result = await response.json();
    
	const nameData = result.map(item =>  item["fullName"]        );
    
    return nameData;
} catch (error) {
	console.error(error);
}

    }
);
    





const dataSlice = createSlice({
    name: "movies",
    initialState: initState,
    reducers:{
        reset:(state:MovieState,{payload})=>{state.count = payload}
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchMovies.pending,(state:MovieState)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchMovies.fulfilled,(state:MovieState,{payload})=>{
            state.isLoading = false;
            state.count = payload.length;
            state.names = payload;

        });
        builder.addCase(fetchMovies.rejected,(state:MovieState,action)=>{
            state.isLoading = false;
            state.error = action.error.message||'';

        });
    }

}) as typeof dataSlice extends {extraReducers: (builder: ActionReducerMapBuilder<typeof initState> )=>void} ? typeof dataSlice: never;

export const {reset } = dataSlice.actions;
export default dataSlice.reducer;

