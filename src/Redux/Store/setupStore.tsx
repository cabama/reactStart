export interface ISetUpStore {
  isMobile: boolean
}

export const defaultSetUpStore: ISetUpStore = {
  isMobile: /android.+mobile|ip(hone|[oa]d)/i.test(navigator.userAgent),
}
