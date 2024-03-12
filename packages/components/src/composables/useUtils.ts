const defaultPrefixCls = "stDesignUi";
export function usePrefixCls(suffixCls: string) {
  return `${defaultPrefixCls}-${suffixCls}`;
}
