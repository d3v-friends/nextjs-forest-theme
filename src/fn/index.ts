// classnames
export {default as cls} from "./class-names";

// modal
export {default as modal} from "./modal";
export {default as alert} from "./modal/alert";
export {default as toast} from "./modal/toast";
export {default as onErrorAlert} from "./modal/on-error-alert";
export type {ModalOptions, ModalChildren} from "./modal";
export type {AlertOptions, AlertChildren} from "./modal/alert";

// modal-promise
export type * from "./modal-promise/types";
export type * from "./modal-promise/alert";
export {default as alertPromise} from "./modal-promise/alert";
export {default as okCancelPromise} from "./modal-promise/ok-cancel";

// string converter
export {default as strconv} from "./strconv";

// suspend
export {default as suspend} from "./suspend";

// promise-chaining
// promise 커스텀 함수 등록. 루트에서 한번 실행시켜준다.
export {default as Promise} from "./promise-chaining/promise-implement";
