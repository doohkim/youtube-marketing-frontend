import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const INCREASE = 'productDetailSelect/INCREASE';
const DECREASE = 'productDetailSelect/DECREASE';
const CHANGE_INPUT = 'productDetailSelect/CHANGE_INPUT';
const INSERT = 'productDetailSelect/INSERT';
// const TOGGLE = 'productDetailSelect/TOGGLE';
const REMOVE = 'productDetailSelect/REMOVE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
let id = 1;
export const insert = createAction(INSERT, (text) => ({
    id: id++,
    text,
    number: 1,
}));
// export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
    input: '상품 선택',
    selectProducts: [],
};

const productDetailSelect = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) =>
            produce(state, (draft) => {
                draft.input = input;
            }),
        [INSERT]: (state, { payload: product }) =>
            produce(state, (draft) => {
                let duplicateItem = false;
                draft.selectProducts.find((selectedProduct) => {
                    if (product.text === selectedProduct.text) {
                        duplicateItem = true;
                    }
                });
                if (duplicateItem) {
                    draft.selectedProduct = state;
                    alert('중복');
                } else {
                    draft.selectProducts.push(product);
                }

                // draft.selectProducts.push(product);
            }),
        [REMOVE]: (state, { payload: id }) =>
            produce(state, (draft) => {
                const index = draft.selectProducts.findIndex((product) => {
                    product.id === id;
                });
                draft.selectProducts.splice(index, 1);
            }),
        [INCREASE]: (state, { payload: id }) =>
            produce(state, (draft) => {
                const product = draft.selectProducts.find(
                    (product) => product.id === id,
                );
                product.number = product.number + 1;
            }),
        [DECREASE]: (state, { payload: id }) =>
            produce(state, (draft) => {
                const product = draft.selectProducts.find(
                    (product) => product.id === id,
                );
                if (product.number === 1) {
                    product.number = 1;
                } else {
                    product.number = product.number - 1;
                }
            }),
    },
    initialState,
);
export default productDetailSelect;
