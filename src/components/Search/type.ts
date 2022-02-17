/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-17 15:35:41
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-17 16:56:10
 * @FilePath: /react-study/src/components/Search/type.ts
 * @Description: update here
 */

import type { CSSProperties, FocusEvent, ChangeEvent } from 'react';

export interface SearchProps{
    placeholder?: string
    className?: string
    value?: string
    style?: CSSProperties
    defaultValue?: string
    onFocus?: ( event: FocusEvent<HTMLInputElement, Element> )=>void
    onChange?: ( event: ChangeEvent<HTMLInputElement> )=>void
    onCancel?: () => void
    onSearch?: ( value: string ) => void
    onClearClick?: ()=> void
}

export interface SearchState{
    showBtn: boolean
    sValue:  string
}