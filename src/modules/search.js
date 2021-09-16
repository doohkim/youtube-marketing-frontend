import produce from 'immer';
import { createAction, handelActions } from 'redux-actions';

const CHANGE_FIELD = 'channel/CHANGE_FIELD';

const INITIALIZE_FORM = 'channel/INITIALIZE_FORM';

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form,
        key,
        value,
    }),
);
const search = handelActions({
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
        produce(state, (draft) => {
            draft[form][key] = value;
        }),
    [INITIALIZE_FORM]: (state, { payload: form }) =>
        produce(state, (draft) => ({
            ...state,
            [form]: initialState[form],
        })),
});
