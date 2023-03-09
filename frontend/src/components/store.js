import {
    create
} from 'zustand';

export const useStore = create((set) => ({
        selectedBebida: null,
        selectedMezcla: null,

        selectBebida: (bebida) => {
            set({
                selectedBebida: bebida
            })
        },
        selectMezcla: (mezcla) => {
            set({
                selectedMezcla: mezcla
            })
        },

        unselectedBebida: () => set({
            selectedBebida: null
        }),
        unselectedMezcla: () => set({
            selectedMezcla: null
        }),


        showState: (state) => {
            console.log(state.selectedBebida);
            console.log(state.selectedMezcla);
        }

    })

);