/* Libraries */
import { memo } from 'react';
/* Recoil */
import { useRecoilState } from 'recoil';
import { memosAtom } from './../recoil/';
/* Interfaces*/
import { MemoTypes } from '../interfaces';

export const MemoListItem = memo(({ memo, index }: MemoTypes) => {
    const [memos, setMemos] = useRecoilState(memosAtom);

    /* Handlers */
    const onClickDeleteMemo = (i: number) => {
        const newMemos = [...memos];
        newMemos.splice(i, 1);
        setMemos(newMemos);
    };

    return (
        <li className="my-1">
            <span>번호: {index + 1}</span>
            <span>내용: {memo.memo}</span>
            <button
                className="ml-3 px-3 py-1 border-[1px] border-solid border-slate-300 rounded"
                type="button"
                onClick={() => onClickDeleteMemo(index)}
            >
                삭제
            </button>
        </li>
    );
});
