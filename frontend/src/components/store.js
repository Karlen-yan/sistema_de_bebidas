import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      selectedBebida: null,
      selectedMezcla: null,

      selectBebida: (bebida) => {
        set({
          selectedBebida: bebida,
        });
      },
      selectMezcla: (mezcla) => {
        set({
          selectedMezcla: mezcla,
        });
      },

      unselectedBebida: () =>
        set({
          selectedBebida: null,
        }),
      unselectedMezcla: () =>
        set({
          selectedMezcla: null,
        }),

      showState: (state) => {
        console.log(state.selectedBebida);
        console.log(state.selectedMezcla);
      },
    }),
    {
      name: 'drink-storage', // nombre del elemento en el almacenamiento (debe ser único)
      getStorage: () => localStorage, // obtener el almacenamiento (por defecto, 'localStorage' se utiliza)
      serialize: JSON.stringify, // (opcional) función de serialización personalizada
      deserialize: JSON.parse, // (opcional) función de deserialización personalizada
    }
  )
);
















// import {create} from 'zustand';
// import {persist, createJSONStorage} from 'zustand/middleware';

// export const useStore = create((set) => ({
//         selectedBebida: null,
//         selectedMezcla: null,

//         selectBebida: (bebida) => {
//             set({
//                 selectedBebida: bebida
//             })
//         },
//         selectMezcla: (mezcla) => {
//             set({
//                 selectedMezcla: mezcla
//             })
//         },

//         unselectedBebida: () => set({
//             selectedBebida: null
//         }),
//         unselectedMezcla: () => set({
//             selectedMezcla: null
//         }),


//         showState: (state) => {
//             console.log(state.selectedBebida);
//             console.log(state.selectedMezcla);
//         }


//     }),
//     persist(
//         (set, get) => ({
//           bears: 0,
//           addABear: () => set({ bears: get().bears + 1 }),
//         }),
//         {
//           name: 'dring-storage', // name of the item in the storage (must be unique)
//           storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
//         }
//       )
// );