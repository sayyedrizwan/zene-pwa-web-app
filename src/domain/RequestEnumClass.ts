export type ResponseData<T> = { type: ResponseDataEnum.EMPTY } | { type: ResponseDataEnum.LOADING } | { type: ResponseDataEnum.ERROR } | { type: ResponseDataEnum.SUCCESS; data: T }

export enum ResponseDataEnum {
  LOADING,
  EMPTY,
  SUCCESS,
  ERROR,
}
